import ImageHeadTextCard from "../../Elements/ImageHeadTextCard/ImageHeadTextCard";

export default function WhyUs(){
    return(
        <div class="relative bg-white overflow-hidden py-6">
            <div class="max-w-7xl">
                <p className="text-3xl font-medium">Why us</p>
                <div className="bg-black w-24 h-0.5 mx-auto my-4" />
                <p className="block">
                    <span className="block">Shipit intends to <b>bridge the distance between cities</b> and deliver your goods with care and utmost priority.</span>
                    <span className="block">We <b>value your money</b> so we give you the option to choose from variety of vendors.</span>
                    <span className="block">We <b>value your time</b> and therefore we bring to you Priority Delivery and 24x7 Customer support.</span>
                </p>
                <div className="mx-24 my-4 grid gap-4 grid-cols-3 grid-rows-1">
                    <ImageHeadTextCard title="Order Tracking" description="Find the current status of your order from various vendors."/>
                    <ImageHeadTextCard title="Compare Vendors" description="Get the best prices from top vendors. Compare and choose the best."/>
                    <ImageHeadTextCard title="Priority Delivery" description="We understand the value of Time. Get your parcel delivered ASAP!"/>
                </div>
            </div>
        </div>
    );
}