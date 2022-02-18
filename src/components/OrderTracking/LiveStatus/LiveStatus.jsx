import { useState } from "react";
import Timeline from "../Timeline/Timeline";

export default function LiveStatus(){
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
                {orderTimeline.map((oStatus, index) =>
                    <Timeline key={index} date={oStatus.time} status={oStatus.status} isCurrent={index<=level}/>
                )}
            </ol>
        </div>
    );
}