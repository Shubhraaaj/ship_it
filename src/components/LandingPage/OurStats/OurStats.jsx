import CircleCounter from "./CircleCounter";

export default function OurStats(){
    return(
        <div className="relative bg-red-50 overflow-hidden py-12">
            <div className="max-w-7xl mx-auto">
                <p className="text-3xl font-bold">Our Stats</p>
                <div className="bg-black w-24 h-0.5 mx-auto my-4" />
                <div className="mt-12 grid grid-cols-4 grid-rows-1">
                    <CircleCounter number="60" title="Destinations Covered"/>
                    <CircleCounter number="121" title="Orders Completed"/>
                    <CircleCounter number="18" title="Vendor Partners"/>
                    <CircleCounter number="DTDC" title="Trending Vendor"/>
                </div>
            </div>
        </div>
    );
}