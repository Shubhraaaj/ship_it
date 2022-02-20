import { useNavigate } from "react-router-dom";
import TitleText from "../../Elements/TitleText/TitleText";

export default function OrderDetailsCard( { orderDetails }){
    const senderDetails = orderDetails?.sender_details.name+"\n"+orderDetails?.sender_details.address+"\n"+ orderDetails?.sender_details.state + "-" + orderDetails?.sender_details.pincode + "\n" +orderDetails?.sender_details.phone;
    const receiverDetails = orderDetails?.receiver_details.name+"\n"+orderDetails?.receiver_details.address+"\n"+ orderDetails?.receiver_details.state + "-" + orderDetails?.receiver_details.pincode + "\n" +orderDetails?.receiver_details.phone;
    const navigate = useNavigate();
    const handleCancel = () => {
        console.log("Cancel order");
    };

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
            <TitleText title="Order ID" text={orderDetails?.order_no.toUpperCase()}/>
            <TitleText title="Bill" text={"₹"+orderDetails?.amount+".00"}/>
            <TitleText title="Vendor" text={orderDetails?.vendor_name}/>
            <TitleText title="Tracking Number" text={orderDetails?.tracking_no.toUpperCase()}/>
            <TitleText title="Order Type" text={orderDetails?.order_type}/>
            <TitleText title="Package Details" text={orderDetails?.parcel_type}/>
            <TitleText title="Sender Details" text={senderDetails} small/>
            <TitleText title="Receiver Details" text={receiverDetails} small/>
            <div className="flex space-x-6 mt-6">
                <button type="btn" onClick={handleCancel} className="btn bg-gray-300 text-gray-600 w-full py-2 font-medium rounded-xl">Cancel Order</button>
                <button type="btn" onClick={handleTrack} className="btn bg-red-500 hover:bg-red-600 text-white w-full py-3 font-medium rounded-xl">Track now</button>
            </div>
        </div>
    );
}