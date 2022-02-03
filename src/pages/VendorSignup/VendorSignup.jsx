import LeftTextwBtn from "../../components/Elements/LeftTextwBtn/LeftTextwBtn";
import SignupCard from "../../components/VendorSignup/SignupCard/SignupCard";
import OrderTracking from "../OrderTracking/OrderTracking";

export default function VendorSignup(){
    return(
        <div className="flex">
            <div className="flex-1 p-8">
                {/* <LeftTextwBtn /> */}
                <OrderTracking />
            </div>
            <div className="flex-1 p-8">
                <SignupCard />
            </div>
        </div>
    );
}