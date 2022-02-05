import MainMenu from "../../components/Elements/Header/MainMenu";
import LeftTextwBtn from "../../components/Elements/LeftTextwBtn/LeftTextwBtn";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";

export default function OrderDetails(){
    return(
        <div className="flex flex-col h-1/2 bg-red-50">
            <MainMenu />
            <div className="grid grid-cols-2 my-8">
                <div className="flex flex-col mx-36 my-auto">
                    <LeftTextwBtn />
                </div>
                <div className="mx-20 mb-4">
                    <OrderDetailsCard />
                </div>
            </div>  
        </div>
    );
}