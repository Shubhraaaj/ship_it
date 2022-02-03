import OrderDetails from "../../components/FillOrderDetails/OrderDetails/OrderDetails";

export default function FillOrderDetails(){
    return(
        <div className="py-8 px-20 bg-red-50 m-20 rounded-xl">
            <h3 className="text-xl text-gray-700 font-medium">Please enter the Sender and Receiver details to place your order</h3>
            <div className="grid grid-cols-2 grid-rows-1 mt-8 space-x-8">
                <OrderDetails isSender class="flex-1"/>
                <OrderDetails class="flex-1"/>
            </div>
            <div className="grid grid-cols-2 ">
                <p className="flex">
                    <span className="block text-left">Final Bill</span><span className="text-left block">(Incl. taxes)</span>
                    <p className="">Rs.2880.00</p>
                </p>
                <button type="button" class="btn w-4/5 text-center btn-primary font-medium bg-red-400 rounded-3xl text-white py-2">PLACE ORDER</button>
            </div>
        </div>
    );
}