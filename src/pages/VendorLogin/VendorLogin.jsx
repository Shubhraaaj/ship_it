import LeftTextwBtn from "../../components/Elements/LeftTextwBtn/LeftTextwBtn";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import LoginCard from "../../components/VendorLogin/LoginCard/LoginCard";

export default function VendorLogin(){
    return(
        <div className="flex">
            <div className="flex-1 p-8">
                <LeftTextwBtn />
            </div>
            <div className="flex-1 p-8">
                <LoginCard />
                {/* <OrderDetailsCard /> */}
            </div>
        </div>
    );
}