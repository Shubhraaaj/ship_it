import { useLazyQuery } from "@apollo/client";
import { useEffect, useLayoutEffect, useState } from "react";
import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import DestinationChart from "../../components/VendorDashboard/DestinationChart";
import MonthwiseChart from "../../components/VendorDashboard/MonthwiseChart";
import OrdersTable from "../../components/VendorDashboard/OrdersTab";
import SourceChart from "../../components/VendorDashboard/SourceChart";
import StatusCharts from "../../components/VendorDashboard/StatusCharts";
import { GET_METRICS } from "../../graphql/queries";
import vendorStore from "../../store/vendor";

export default function VendorDashboard(){

    const [topSrc, setTopSrc] = useState({});
    const [topDest, setTopDest] = useState([]);
    const [monthWise, setMonthWise] = useState([]);
    const [orders, setOrders] = useState([]);
    
    const [vendorState, setVendorState] = useState(vendorStore.initialState);

    const [getOrdersMatrix, { loading, error, data }] = useLazyQuery(GET_METRICS, {
        variables: {
            vendor_id: vendorState.vendor_id,
            filterDate: 2022
        }
    });

    useEffect(()=>{
        getOrdersMatrix().then(res=>{
            const vendor = res?.data?.getOrdersMatrix;
            if(vendor!==null&&vendor!==undefined)
            {
                console.log('sp', vendor);
                setTopSrc(JSON.parse(vendor?.topSourceCities));
                setTopDest(JSON.parse(vendor?.topDestCities));
                setOrders(JSON.parse(vendor?.numberOfOrdersByStatus));
                setMonthWise(JSON.parse(vendor?.monthwiseOrders));
            }
        }).catch(err=>console.log(err));
    },[vendorState]);

    useLayoutEffect(()=>{
        vendorStore.subscribe(setVendorState);
        vendorStore.init();
    },[]);


    return(
        <div>
            <OrdersTable />
            <div className="my-20">
                <div className="flex justify-between p-10 mx-20 shadow-xl rounded-xl">
                    <StatusCharts details={orders}/>
                    <MonthwiseChart details={monthWise}/>
                </div>
                <div className="flex justify-between p-10 mt-8 mx-20 shadow-xl rounded-xl">
                    <SourceChart details={topSrc}/>
                    <DestinationChart details={topDest}/>
                </div>
            </div>
        </div>
    );
}