import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import companyStore from "../../../store/company";
import Filters from "../../Elements/Filters/Filters";

export default function VendorTable(){
    const navigate = useNavigate();
    const createOrderPath = '/fill_order';
    const [filters, setFilters] = useState({});
    const [companyState, setCompanyState] = useState(companyStore.initialState);

    const [asc, setAsc] = useState({
        vendor: true
    });
    const vendors = [
        {
            vendor_id: 1,
            name: "DTDC",
            normal_delivery: "2",
            priority_delivery: "1",
            normal_price: "420",
            priority_price: "650"
        },
        {
            vendor_id: 2,
            name: "Delhivery",
            normal_delivery: "2",
            priority_delivery: "1",
            normal_price: "350",
            priority_price: "500"
        },
        {
            vendor_id: 3,
            name: "Gati",
            normal_delivery: "3",
            priority_delivery: "2",
            normal_price: "720",
            priority_price: "1050"
        },
        {
            vendor_id: 4,
            name: "Ekart",
            normal_delivery: "4",
            priority_delivery: "2",
            normal_price: "220",
            priority_price: "350"
        },
        {
            vendor_id: 5,
            name: "Firstflight",
            normal_delivery: "5",
            priority_delivery: "2",
            normal_price: "820",
            priority_price: "1650"
        }
    ];

    const handleClick = (e) => {
        const name = e.target.name;
        setAsc({ name:true });
    };

    // useEffect(()=>{
    //     console.log(asc);
    // },[filters, asc]);

    const handleSelect = (company) => {
        companyStore.setCompanyDetails(company, navigate(createOrderPath));
    };

    return(
        <>
        <Filters />
        <div className="flex flex-col mx-20">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-4">
                                <button name="vendor" onClick={handleClick} className="text-md font-medium text-gray-800">Vendor{asc.vendor?<FaArrowDown className="text-sm inline ml-1 text-gray-600 self-center"/>:<FaArrowUp className="text-sm inline ml-1 text-gray-600 self-center"/>}</button>
                            </th>
                            <th scope="col" className="px-6 text-left py-4">
                                <button name="delivery" onClick={handleClick} className="text-md font-medium text-gray-800">Delivery Time{asc?.delivery?(asc.delivery?<FaArrowDown className="text-sm inline ml-1 text-gray-600 self-center"/>:<FaArrowUp className="text-sm inline ml-1 text-gray-600 self-center"/>):""}</button>
                            </th>
                            <th scope="col" className="px-6 py-4">
                                <button name="normal" onClick={handleClick} className="text-md font-medium text-gray-800">Normal Tariff{asc?.normal?(asc.normal?<FaArrowDown className="text-sm inline ml-1 text-gray-600 self-center"/>:<FaArrowUp className="text-sm inline ml-1 text-gray-600 self-center"/>):""}</button>
                            </th>
                            <th scope="col" className="px-6 py-4">
                                <button name="priority" onClick={handleClick} className="text-md font-medium text-gray-800">Priority Tariff{asc?.priority?(asc.priority?<FaArrowDown className="text-sm inline ml-1 text-gray-600 self-center"/>:<FaArrowUp className="text-sm inline ml-1 text-gray-600 self-center"/>):""}</button>
                            </th>
                            <th scope="col" className="text-md font-medium text-gray-800 px-6 py-4">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.map((vendor, index)=>
                            <tr key={index} className="bg-white border-b">
                                <td className="px-auto py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {vendor.name}
                                </td>
                                <td className="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {`${Number(vendor.priority_delivery)} - ${Number(vendor.priority_delivery)+1} Days in Priority | ${Number(vendor.normal_delivery)+1} - ${Number(vendor.normal_delivery)+2} Days in Normal`}
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
                            </tr>
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