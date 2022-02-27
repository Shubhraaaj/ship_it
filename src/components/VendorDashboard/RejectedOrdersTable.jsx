import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useLayoutEffect, useState } from "react";
import { MODIFY_ORDER_BY_ID } from "../../graphql/mutations";
import { FETCH_ORDERS } from "../../graphql/queries";
import vendorStore from "../../store/vendor";

export default function RejectedOrdersTable(){
    const [ordered, setOrdered] = useState([]);
    const [orderUpdate, setOrderUpdate] = useState({});
    const [vendorState, setVendorState] = useState(vendorStore.initialState);

    const [getOrders, {data, loading, errors}] = useLazyQuery(FETCH_ORDERS, {
        variables: {
            vendor_id: vendorState.vendor_id,
            status: "Rejected"
        }
    });

    const [modifyOrderByOrderNo, {datas, loadings, error}] = useMutation(MODIFY_ORDER_BY_ID, {
        variables: {
            updateOrderInput: orderUpdate
        }
    });

    useLayoutEffect(()=>{
        vendorStore.subscribe(setVendorState);
        vendorStore.init();
    },[]);

    useEffect(()=>{
        if(vendorState.vendor_id!==undefined&&vendorState.vendor_id.length>0){
            getOrders().then((res)=>{
                setOrdered(res.data.getOrders);
            }).catch((err)=>{
                // console.log(err);
            });
        }
    },[vendorState]);

    const handleStatusChange = (e,index) => {
        const selectedValue = e.target.value;
        
        let order = ordered[index];
        let live_stats = JSON.parse(order.live_status);

        if(selectedValue==="PickedUp"){
            // Pickup order and update live_status
            const order_status = "PickedUp";
            const live_status = {
                description: "Order Pickedup",
                dateTime: new Date().toISOString()
            };
            live_stats.vendorConfirmation = live_status;
            setOrderUpdate({
                order_no: order.order_no,
                order_status: order_status,
                live_status: JSON.stringify(live_stats)
            }, modifyOrderByOrderNo());
        }
        else if(selectedValue==="InTransit"){
            // In transit and update live_status
            const order_status = "InTransit";
            const live_status = {
                description: "In Transit",
                dateTime: new Date().toISOString()
            };
            live_stats.vendorConfirmation = live_status;
            setOrderUpdate({
                order_no: order.order_no,
                order_status: order_status,
                live_status: JSON.stringify(live_stats)
            }, modifyOrderByOrderNo());
        }
        else if(selectedValue==="OutForDelivery"){
            // Out for delivery and update live_status
            const order_status = "OutForDelivery";
            const live_status = {
                description: "Your package is out for delivery",
                dateTime: new Date().toISOString()
            };
            live_stats.vendorConfirmation = live_status;
            setOrderUpdate({
                order_no: order.order_no,
                order_status: order_status,
                live_status: JSON.stringify(live_stats)
            }, modifyOrderByOrderNo());
        }
        else if(selectedValue==="Delivered"){
            // Delivered and update live_status
            const order_status = "Delivered";
            const live_status = {
                description: "Package Delivered",
                dateTime: new Date().toISOString()
            };
            live_stats.vendorConfirmation = live_status;
            setOrderUpdate({
                order_no: order.order_no,
                order_status: order_status,
                live_status: JSON.stringify(live_stats)
            }, modifyOrderByOrderNo());
        }
        else if(selectedValue==="Rejected"){
            // Reject order and update live_status
            const order_status = "Rejected";
            const live_status = {
                description: "Vendor Rejected the Order",
                dateTime: new Date().toISOString()
            };
            live_stats.vendorConfirmation = live_status;
            setOrderUpdate({
                order_no: order.order_no,
                order_status: order_status,
                live_status: JSON.stringify(live_stats)
            }, modifyOrderByOrderNo());
        }
    };
    
    return(
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                    <thead className="border-b bg-red-50">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Sl.No.
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Order No
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Source
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Destination
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Type
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Bill
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Priority
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Status
                            </th>
                        </tr>
                    </thead>
                    {ordered.length===0 && 
                        <div className="my-8">
                            <p>No Rejected orders available</p>
                        </div>
                    }
                    <tbody>
                        {ordered.map((order,index)=>
                            <tr key={index} className="bg-white border-b">
                                <td className="px-auto py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {index+1}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.order_no}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.source_city}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.destination_city}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.type}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Rs.{order.amount}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.priority}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {/* <select defaultValue={order.order_status} onChange={(e)=>handleStatusChange(e,index)}> */}
                                    <select defaultValue={order.order_status}>
                                        {/* <option value="Ongoing">Ongoing</option>
                                        <option value="PickedUp">Picked up</option>
                                        <option value="InTransit">In transit</option>
                                        <option value="OutForDelivery">Out for delivery</option>
                                        <option value="Delivered">Delivered</option> */}
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
}