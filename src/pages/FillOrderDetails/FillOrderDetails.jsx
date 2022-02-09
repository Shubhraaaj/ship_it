import { Link } from "react-router-dom";
import MainMenu from "../../components/Elements/Header/MainMenu";
import OrderDetails from "../../components/FillOrderDetails/OrderDetails/OrderDetails";

export default function FillOrderDetails(){
    return(
        <div>
            <MainMenu isWhite />
            <div className="py-8 px-12 mx-20 shadow-md mt-4 mb-8 bg-red-50 rounded-xl">
                <h3 className="text-xl text-gray-700 font-medium">Please enter the Sender and Receiver details to place your order</h3>
                <div className="grid grid-cols-2 grid-rows-1 mt-8">
                    <div className="mx-12">
                        <OrderDetails isSender/>
                        <p className="flex mt-8 space-x-8">
                            <p><span className="block text-gray-600 font-normal text-xl text-left">Final Bill</span><span className="text-left text-gray-600 block">(Incl. taxes)</span></p>
                            <span className="text-3xl font-medium">Rs.2880.00</span>
                        </p>
                    </div>
                    <div className="mx-12">
                        <OrderDetails />
                        <button type="button" class="btn mt-8 w-full text-center btn-primary font-medium bg-red-500 hover:bg-red-600 rounded-xl text-white py-2"><Link to='/order_details'>PLACE ORDER</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}