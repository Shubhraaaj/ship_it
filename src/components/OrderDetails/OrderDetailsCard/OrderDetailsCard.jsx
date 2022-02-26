import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleText from "../../Elements/TitleText/TitleText";

export default function OrderDetailsCard( { orderDetails }){
    const [senderDetails, setSenderDetails] = useState("");
    const [receiverDetails, setReceiverDetails] = useState("");
    const navigate = useNavigate();
    const handleCancel = () => {
        console.log("Cancel order");
    };

    useEffect(()=>{
        if(orderDetails.sender!==''&&orderDetails.receiver!==''){
            const sender = JSON.parse(orderDetails?.sender);
            const receiver = JSON.parse(orderDetails?.receiver);
            setSenderDetails(sender?.name+"\n"+sender?.address+"\n"+ sender?.state + "-" + sender?.pincode + "\n" +sender?.phone);
            setReceiverDetails(receiver?.name+"\n"+receiver?.address+"\n"+ receiver?.state + "-" + receiver?.pincode + "\n" +receiver?.phone);
        }
    },[orderDetails]);

    const handleTrack = () => {
        navigate('/order_tracking');
    };
    
    return (
        <div className="rounded-2xl shadow-lg bg-white px-12 py-6">
            <h3 className="text-red-500 text-2xl font-medium text-left mb-8">Order Details</h3>
            {/* <div className="flex justify-between">
                <h3 className="text-red-500 text-2xl font-medium text-left mb-8">Order Details</h3>
                <h4 className="text-red-500 text-xl font-medium text-left mb-8">₹4000.00</h4>
            </div> */}
            <TitleText title="Order ID" text={orderDetails?.order_no}/>
            <TitleText title="Bill" text={"₹"+orderDetails?.amount+".00"}/>
            <TitleText title="Vendor" text={orderDetails.name===undefined?orderDetails.vendor_id:orderDetails.name}/>
            <TitleText title="Current Status" text={orderDetails?.order_status}/>
            <TitleText title="Tracking Number" text={orderDetails?.tracking_id}/>
            <TitleText title="Order Type" text={orderDetails?.priority}/>
            <TitleText title="Package Details" text={orderDetails?.type}/>
            <TitleText title="Sender Details" text={senderDetails} small/>
            <TitleText title="Receiver Details" text={receiverDetails} small/>
            <div className="flex space-x-6 mt-6">
                <button type="btn" onClick={handleCancel} className="btn bg-gray-300 text-gray-600 w-full py-2 font-medium rounded-xl">Cancel Order</button>
                <button type="btn" onClick={handleTrack} className="btn bg-red-500 hover:bg-red-600 text-white w-full py-3 font-medium rounded-xl">Track now</button>
            </div>
        </div>
    );
}