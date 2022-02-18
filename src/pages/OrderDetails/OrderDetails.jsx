import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import LeftTextwBtn from "../../components/Elements/LeftTextwBtn/LeftTextwBtn";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import { useEffect, useLayoutEffect, useState } from "react";
import orderStore from "../../store/order";

export default function OrderDetails(){
    const [orderState, setOrderState] = useState(orderStore.initialState);

    useLayoutEffect(()=>{
        orderStore.subscribe(setOrderState);
        orderStore.init();
    },[]);

    useEffect(()=>{
        console.log(orderState);
    },[orderState]);

    return(
        <div className="flex flex-col h-1/2 bg-red-50">
            {/* <MainMenu /> */}
            <div className="grid grid-cols-2 my-8">
                <div className="flex flex-col mx-36 my-auto">
                    <LeftTextwBtn />
                </div>
                <div className="mx-20 mb-4">
                    <OrderDetailsCard orderDetails={orderState}/>
                </div>
            </div>  
        </div>
    );
}