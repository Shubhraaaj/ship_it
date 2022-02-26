import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vendorStore from "../../../store/vendor";

export default function MainMenu({ isWhite }){
    const vendor = window.location.href.endsWith("ile");
    const [vendorState, setVendorState] = useState(vendorStore.initialState);
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if(vendorState!==vendorStore.initialState&&vendorState.auth_token!=='')
            console.log('vendor',vendorState);
    },[vendorState]);

    useLayoutEffect(()=>{
        vendorStore.subscribe(setVendorState);
        vendorStore.init(); 
    },[]);

    const logout = () => {
        vendorStore.clearVendorDetails();
        navigate('/');
    };

    return(
        <div className={isWhite?"relative py-6 px-4 sm:px-6 lg:px-20 bg-white":"relative py-6 px-4 sm:px-6 lg:px-20 bg-red-50"}>
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link to="/">
                        <span className="sr-only">Shipit</span>
                            <h1 className="text-3xl font-bold"><span className="text-gray-800">Ship</span><span className="text-red-500">it.</span></h1>
                            {/* <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" /> */}
                        </Link>
                        <div className="-mr-2 flex items-center md:hidden">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                {vendorState?.auth_token.length>0?
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-12">
                        <Link to="/vendor_dashboard">
                            <p className="font-medium inline text-gray-700 hover:text-gray-900">DASHBOARD</p>
                        </Link>
                        <Link to="/vendor_profile">
                            <p className="font-medium inline text-gray-700 hover:text-gray-900">PROFILE</p>
                        </Link>
                        <Link to="/vendor_profile">
                            <p className="font-medium inline text-gray-700 hover:text-gray-900">CONTACT US</p>
                        </Link>
                        <button onClick={logout} className="font-medium inline text-red-500 hover:text-red-600">LOG OUT</button>
                    </div>
                    :<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-12">
                        <motion.a
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            className="font-medium text-gray-700 hover:gray-900">ABOUT</motion.a>

                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900">TRACK PACKAGE</a>

                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900">CONTACT US</a>
                        <Link to={!vendor?'/vendor_login':'/vendor_dashboard'}>
                            <p className="font-medium inline text-red-500 hover:text-red-600">{!vendor?"VENDOR LOGIN":"DASHBOARD"}</p>
                        </Link>
                    </div>}
            </nav>
        </div>
    );
}