import Timeline from "../Timeline/Timeline";

export default function LiveStatus(){
    const orderStatus = [
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
    return(
        <div className="pl-28 py-8 bg-white rounded-xl shadow-md mt-8">
            <h3 className="text-red-500 text-2xl font-medium -ml-16 text-left mb-8">Live Status</h3>
            <ol class="relative border-l border-gray-600">
                {orderStatus.map((oStatus) =>
                    <Timeline date={oStatus.time} status={oStatus.status} />
                )}
            </ol>
        </div>
    );
}