import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import LeftTextwBtn from "../../components/Elements/LeftTextwBtn/LeftTextwBtn";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import { useEffect, useLayoutEffect, useState } from "react";
import orderStore from "../../store/order";
import { format } from "date-fns";

export default function OrderDetails(){
    const [orderState, setOrderState] = useState(orderStore.initialState);

    useLayoutEffect(()=>{
        orderStore.subscribe(setOrderState);
        orderStore.init();
    },[]);

    const convertTime = (time) => {
        try{
            return(format(new Date(time), 'hh:mm a EEEE, dd/MM/yyyy'));
        }
        catch(error){
            return(time);
        }
    };

    const text=`Your Package will be picked up by
        ${convertTime(orderState.pickup_date_time)}.
        You can track the current status of
        your order via the Tracking ID. 
        Thank you.
        Happy Shipping!`;
    return(
        <div className="flex flex-col h-1/2 bg-red-50">
            {/* <MainMenu /> */}
            <div className="grid grid-cols-2 my-8">
                <div className="flex flex-col mx-36 my-auto">
                    <LeftTextwBtn text={text} button={`Amount - Rs.${orderState.amount}.00`}/>
                </div>
                <div className="mx-20 mb-4">
                    <OrderDetailsCard orderDetails={orderState}/>
                </div>
            </div>  
        </div>
    );
}