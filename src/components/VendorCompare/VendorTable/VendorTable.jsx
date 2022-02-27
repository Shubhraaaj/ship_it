import { useLazyQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FETCH_VENDORS } from "../../../graphql/queries";
import companyStore from "../../../store/company";
import loadingStore from "../../../store/loading";
import searchStore from "../../../store/search";
import Filters from "../../Elements/Filters/Filters";

export default function VendorTable(){
    const navigate = useNavigate();
    const createOrderPath = '/fill_order';
    const [filters, setFilters] = useState({});
    const [companyState, setCompanyState] = useState(companyStore.initialState);
    const [searchState, setSearchState] = useState(searchStore.initialState);
    const [vendorQuery, setVendorQuery] = useState({});
    const [vendor, setVendor] = useState([]);

    const [getAllVendors, {data, loading, error}] = useLazyQuery(FETCH_VENDORS, {
        variables: {
            vendorQueryInput: vendorQuery
        }
    });

    useLayoutEffect(()=>{
        searchStore.subscribe(setSearchState);
        searchStore.init();
    },[]);

    useEffect(()=>{
        if(searchState.type!=="Not selected"&&
            searchState.destination!=="Not selected"&&
            searchState.source!=="Not selected")
        {
            // loadingStore.setLoading({loading: false});
            setVendorQuery({
                type: searchState.type.toLowerCase(),
                weight: parseFloat(searchState.weight),
                destCity: searchState.destination.toLowerCase(),
                srcCity: searchState.source.toLowerCase(),
            });
        }
    },[searchState]);

    useEffect(()=>{
        if(vendorQuery.type!=="Not selected"&&
            vendorQuery.destCity!=="Not selected"&&
            vendorQuery.srcCity!=="Not selected")
        {
            getAllVendors().then(res=>{
                const results = JSON.parse(res.data.getAllVendors.result);
                if(results.length>0){
                    let finalResults = [];
                    results.map((res)=>{
                        let result = {
                            name: res.name,
                            normal_time: Math.ceil(res.distance/50),
                            priority_time: Math.ceil((res.distance/50)/res.priority_factor),
                            vendor_id: res.vendor_id,
                        };
                        let wt = Number(vendorQuery.weight)*1000;
                        let amt = Number(res.price);
                        result.normal_price = Math.ceil(amt+((wt/100)*15));
                        result.priority_price = Math.ceil(amt+((wt/100)*15)*res.priority_factor);
                        finalResults=[...finalResults, result];
                    });
                    if(finalResults.length===results.length){
                        setVendor(finalResults);
                    }
                }
            });
        }
    },[vendorQuery]);
    
    const [asc, setAsc] = useState({
        vendor: true
    });

    const handleClick = (e) => {
        const name = e.target.name;
        setAsc({ name:true });
    };

    // useEffect(()=>{
    //     console.log(asc);
    // },[filters, asc]);

    const handleSelect = (company) => {
        const company_details = {
            vendor_id: company.vendor_id,
            name: company.name,
            normal_price: company.normal_price.toString(),
            priority_price:  company.priority_price.toString(),
            normal_delivery: company.normal_time,
            priority_delivery: company.priority_time
        };
        companyStore.setCompanyDetails(company_details, navigate(createOrderPath));
    };

    return(
        <>
        {/* <Filters /> */}
        <div className="flex flex-col mx-20">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-4">
                                {/* <button name="vendor" onClick={handleClick} className="text-md font-medium text-gray-800">Vendor{asc.vendor?<FaArrowDown className="text-sm inline ml-1 text-gray-600 self-center"/>:<FaArrowUp className="text-sm inline ml-1 text-gray-600 self-center"/>}</button> */}
                                <button name="vendor" onClick={handleClick} className="text-md font-medium text-gray-800">Vendor</button>
                            </th>
                            <th scope="col" className="px-6 text-left py-4">
                                <button name="delivery" onClick={handleClick} className="text-md font-medium text-gray-800">Delivery Time</button>
                            </th>
                            <th scope="col" className="px-6 py-4">
                                <button name="normal" onClick={handleClick} className="text-md font-medium text-gray-800">Normal Tariff</button>
                            </th>
                            <th scope="col" className="px-6 py-4">
                                <button name="priority" onClick={handleClick} className="text-md font-medium text-gray-800">Priority Tariff</button>
                            </th>
                            <th scope="col" className="text-md font-medium text-gray-800 px-6 py-4">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendor.map((vendor, index)=>
                            <motion.tr 
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.03 }}
                                onClick={()=>handleSelect(vendor)}
                                key={index} className="bg-white border-b cursor-pointer">
                                <td className="px-auto py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {vendor.name}
                                </td>
                                <td className="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {`${vendor.priority_time} - ${vendor.priority_time+1} Days in Priority | ${vendor.normal_time} - ${vendor.normal_time+2} Days in Normal`}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <p className="btn btn-primary px-4 py-1 rounded-md text-gray-900 font-medium">Rs.{vendor.normal_price}</p>
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <p className="btn btn-primary px-4 py-1 rounded-md text-gray-900 font-medium">Rs.{vendor.priority_price}</p>
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <FaArrowCircleRight onClick={()=>handleSelect(vendor)} className="text-gray-300 hover:text-red-500 text-3xl font-medium"/>
                                </td>
                            </motion.tr>
                        )}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}