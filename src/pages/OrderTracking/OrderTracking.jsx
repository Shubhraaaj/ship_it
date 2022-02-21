import { useLayoutEffect, useState } from "react";
import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import TrackOrder from "../../components/LandingPage/TrackOrder/TrackOrder";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import LiveStatus from "../../components/OrderTracking/LiveStatus/LiveStatus";
import orderStore from "../../store/order";

export default function OrderTracking(){
    const [orderState, setOrderState] = useState(orderStore.initialState);
    
    useLayoutEffect(()=>{
        orderStore.subscribe(setOrderState);
        orderStore.init();
    },[]);

    return(
        <div className="flex flex-col bg-red-50">
            {/* <MainMenu /> */}
            <div className="flex justify-center mt-8 mx-20 space-x-8">
                <input type="text" className="form-control flex-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md" placeholder="Enter Tracking number" />
                <button className="shadow border border-transparent text-base font-medium text-white bg-red-500 hover:bg-red-600 px-12 py-4 rounded-xl">TRACK NOW</button>
            </div>
            <div className="flex mx-20 space-x-8 mb-20 mt-8">
                <div className="flex-1">
                    <LiveStatus orderDetails={orderState}/>
                </div>
                <div className="flex-1">
                    <OrderDetailsCard orderDetails={orderState}/>
                </div>
            </div>
        </div>
    );
}