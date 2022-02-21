import { useEffect, useState } from "react";
import Timeline from "../Timeline/Timeline";

export default function LiveStatus({ orderDetails }){
    const [orderStatuses, setOrderStatuses] = useState({});

    useEffect(()=>{
        if(orderDetails.live_status!==''){
            const orderStatusUpdates = JSON.parse(orderDetails.live_status);
            setOrderStatuses(orderStatusUpdates);
            console.log(orderStatusUpdates);
        }
    },[orderDetails]);

    const orderTimeline = [
        {
            status: "Order placed",
            time: "2022-02-03T13:28:31.331Z"
        },
        {
            status: "Vendor Confirmation",
            time: "2022-02-03T13:28:31.331Z"
        },
        {
            status: "Order Picked up",
            time: "2022-02-03T13:28:31.331Z"
        },
        {
            status: "In transit",
            time: "2022-02-03T13:28:31.331Z"
        },
        {
            status: "Package Delivered",
            time: "2022-02-03T13:28:31.331Z"
        }
    ];

    const level = 2;

    return(
        <div className="pl-28 pb-0.5 pt-8 bg-white rounded-xl shadow-md">
            <h3 className="text-red-500 text-2xl font-medium -ml-16 text-left mb-8">Live Status</h3>
            <ol className="relative border-l border-gray-600">
                <Timeline 
                    date={orderStatuses?.orderPlaces?.dateTime} 
                    status={orderStatuses?.orderPlaces?.description||"Order Placed"} 
                    isCurrent={orderStatuses?.vendorConfirmation?.dateTime===''}/>
                <Timeline 
                    date={orderStatuses?.vendorConfirmation?.dateTime} 
                    status={orderStatuses?.vendorConfirmation?.description||"Vendor confirmation pending"} 
                    isCurrent={orderStatuses?.orderPickedUp?.dateTime===''&&orderStatuses?.vendorConfirmation?.dateTime!==''}/>
                <Timeline 
                    date={orderStatuses?.orderPickedUp?.dateTime} 
                    status={orderStatuses?.orderPickedUp?.description||"Order will be picked up"} 
                    isCurrent={orderStatuses?.inTransit?.dateTime===''&&orderStatuses?.orderPickedUp?.dateTime!==''}/>
                <Timeline 
                    date={orderStatuses?.inTransit?.dateTime} 
                    status={orderStatuses?.inTransit?.description||"Order in transit"} 
                    isCurrent={orderStatuses?.outForDelievery?.dateTime===''&&orderStatuses?.inTransit?.dateTime!==''}/>
                <Timeline 
                    date={orderStatuses?.outForDelievery?.dateTime} 
                    status={orderStatuses?.outForDelievery?.description||"Order is out for delivery"} 
                    isCurrent={orderStatuses?.packageDelivered?.dateTime===''&&orderStatuses?.outForDelievery?.dateTime!=''}/>
                <Timeline 
                    date={orderStatuses?.packageDelivered?.dateTime} 
                    status={orderStatuses?.packageDelivered?.description||"Package delivered"}  
                    isCurrent={orderStatuses?.outForDelievery?.dateTime!==''}/>
            </ol>
        </div>
    );
}