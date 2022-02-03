import TrackOrder from "../../components/LandingPage/TrackOrder/TrackOrder";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import LiveStatus from "../../components/OrderTracking/LiveStatus/LiveStatus";

export default function OrderTracking(){
    return(
        <div>
            <TrackOrder />
            <div className="flex">
                <div className="flex-1 p-8">
                    <LiveStatus />
                </div>
                <div className="flex-1 p-8">
                    <OrderDetailsCard />
                </div>
            </div>
        </div>
    );
}