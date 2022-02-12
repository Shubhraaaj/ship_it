import { Link } from "react-router-dom";
import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import OrderDetails from "../../components/FillOrderDetails/OrderDetails/OrderDetails";

export default function FillOrderDetails(){
    return(
        <div>
            <MainMenu isWhite />
            <div className="py-8 px-12 mx-20 shadow-md mt-4 mb-8 bg-red-50 rounded-xl">
                <h3 className="text-xl text-center text-gray-900 font-medium">Please enter the Sender and Receiver Details</h3>
                <div className="flex flex-row mt-8">
                    <div className="mx-12">
                        <OrderDetails isSender/>
                    </div>
                    <div className="w-0.5 bg-gray-300 rounded-xl my-4"></div>
                    <div className="mx-12">
                        <OrderDetails />
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="flex flex-1 px-12 mt-8 space-x-8">
                        <p><span className="block text-gray-600 font-normal text-xl text-left">Final Bill</span><span className="text-left text-gray-600 block">(Incl. taxes)</span></p>
                        <span className="text-3xl font-medium">Rs.2880.00</span>
                    </p>
                    <button type="button" class="btn flex-1 w-full mx-auto mt-8 text-center btn-primary font-medium bg-red-500 hover:bg-red-600 rounded-xl text-white py-2"><Link to='/order_details'>PLACE ORDER</Link></button>
                </div>
            </div>
        </div>
    );
}