import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrackOrder(){
    return(
        <div className="relative bg-red-50 overflow-hidden py-20">
            <div className="max-w-7xl mx-auto">
                <p className="text-3xl font-bold">Track Your Order</p>
                <div className="bg-black w-24 h-0.5 mx-auto my-4" />
            </div>
            <div className="flex justify-center mt-8">
                <input 
                    type="text"
                    maxLength="14"
                    className="uppercase form-control block w-2/5 pl-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md m-2" id="exampleFormControlInput1" 
                    placeholder="Tracking number" />
                <Link to="/user_auth">
                    <motion.button 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="m-2 ml-12 shadow border border-transparent text-base font-medium text-white bg-red-500 hover:bg-red-600 px-12 py-4 rounded-xl">TRACK NOW</motion.button>
                </Link>
            </div>
        </div>
    );
}