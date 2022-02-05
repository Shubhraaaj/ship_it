import TitleText from "../../Elements/TitleText/TitleText";

export default function OrderDetailsCard(){
    const orderDetails = {
        orderId: "SHP8901K",
        vendor: "DTDC Couriers",
        trackingNo: "DT8989089897",
        orderType: "Normal",
        packageDetails: "Documents",
        senderDetails: "Shubhraj Prasad Singh, Jharia, Dhanbad, Jharkhand - 828111, Ph: 8603862085",
        receiverDetails: "Satish Kumar, Kankarbagh, Patna, Bihar - 898008, Ph: 8603890891",
    };
    return (
        <div className="rounded-2xl shadow-lg bg-white max-w-md px-12 py-6">
            <h3 className="text-red-500 text-2xl font-medium text-left mb-8">Order Details</h3>
            <TitleText title="Order ID" text={orderDetails.orderId}/>
            <TitleText title="Vendor" text={orderDetails.vendor}/>
            <TitleText title="Tracking Number" text={orderDetails.trackingNo}/>
            <TitleText title="Order Type" text={orderDetails.orderType}/>
            <TitleText title="Package Details" text={orderDetails.packageDetails}/>
            <TitleText title="Sender Details" text={orderDetails.senderDetails}/>
            <TitleText title="Receiver Details" text={orderDetails.receiverDetails}/>
            <div className="flex space-x-6 mt-6">
                <button type="btn" className="btn bg-gray-300 text-gray-600 w-full py-2 font-medium rounded-xl">Cancel Order</button>
                <button type="btn" className="btn bg-red-500 hover:bg-red-600 text-white w-full py-3 font-medium rounded-xl">Track now</button>
            </div>
        </div>
    );
}