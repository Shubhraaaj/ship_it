import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import Switch from "../../components/Elements/Switch/Switch";
import OrderDetails from "../../components/FillOrderDetails/OrderDetails/OrderDetails";
import companyStore from "../../store/company";

export default function FillOrderDetails(){
    const [companyState, setCompanyState] = useState(companyStore.initialState);
    const [priority, setPriority] = useState(false);
    const navigate = useNavigate();
    const placeOrder = '/order_details';
    const [senderDetails, setSenderDetails] = useState({});
    const [receiverDetails, setReceiverDetails] = useState({});

    useLayoutEffect(()=>{
        companyStore.subscribe(setCompanyState);
        companyStore.init();
    },[]);

    const handleSenderChanges = (details) => {
        setSenderDetails(details);
    };

    const handleReceiverChanges = (details) => {
        setReceiverDetails(details);
    };

    const handleSubmit = () => {
        console.log(senderDetails);
        console.log(receiverDetails);
        console.log(priority);
    };

    return(
        <div className="bg-red-50 pb-8 pt-4">
            {/* <MainMenu isWhite /> */}
            <div className="py-8 px-12 mx-20 shadow-md bg-white rounded-xl">
                <h3 className="text-xl text-center text-gray-900 font-medium">Please enter the Sender and Receiver Details</h3>
                <div className="flex flex-row mt-8">
                    <div className="mx-12">
                        <OrderDetails isSender details={senderDetails} />
                    </div>
                    <div className="w-0.5 bg-gray-300 rounded-xl my-4"></div>
                    <div className="mx-12">
                        <OrderDetails details={receiverDetails} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="flex flex-1 px-12 mt-8 justify-between">
                        <p className="flex">
                            <p><span className="block text-gray-600 font-normal text-xl text-left">Final Bill</span><span className="text-left text-gray-600 block">(Incl. taxes)</span></p>
                            <span className="ml-4 text-2xl font-medium">Rs.{priority?companyState.priority_price:companyState.normal_price}.00</span>
                        </p>
                        <Switch priority={priority} onChange={(prior)=>setPriority(prior)} />
                    </p>
                    <button onClick={handleSubmit} type="button" className="btn flex-1 w-full mx-auto mt-8 text-center btn-primary font-medium bg-red-500 hover:bg-red-600 rounded-xl text-white py-2">PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
}