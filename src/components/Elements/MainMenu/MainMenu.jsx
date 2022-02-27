import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navigationStore from "../../../store/navigation";
import vendorStore from "../../../store/vendor";

export default function MainMenu({ isWhite }){
    const [vendorState, setVendorState] = useState(vendorStore.initialState);
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();
    // useEffect(()=>{
    //     if(vendorState!==vendorStore.initialState&&vendorState.auth_token!=='')
    //         console.log('vendor',vendorState);
    // },[vendorState]);

    useLayoutEffect(()=>{
        vendorStore.subscribe(setVendorState);
        vendorStore.init(); 
    },[]);

    const logout = () => {
        vendorStore.clearVendorDetails();
        navigate('/');
    };

    const login = () => {
        navigate('/vendor_login');
    };

    const handleNavClick = (e) => {
        const id = e.target.id;
        if(id==="about"){
            navigationStore.setNavigation({navigate: 'about'},navigate('/'));
        }
        else if(id==="track"){
            navigationStore.setNavigation({navigate: 'track'},navigate('/'));
        }
        else if(id==="contact"){
            navigationStore.setNavigation({navigate: 'contact'},navigate('/'));
        }
    };

    return(
        <div className={isWhite?"relative py-6 px-4 sm:px-6 lg:px-20 bg-white":"relative py-6 px-4 sm:px-6 lg:px-20 bg-red-50"}>
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        {/* <Link to="/"> */}
                        <span className="sr-only">Shipit</span>
                            <motion.button 
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.2 }}
                                onClick={()=>{
                                    navigationStore.clearNavigation();
                                    navigate('/');
                                }}
                                className="text-3xl font-bold">
                                    <span className="text-gray-800">Ship</span>
                                    <span className="text-red-500">it.</span>
                            </motion.button>
                            {/* <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" /> */}
                        {/* </Link> */}
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
                        <motion.button 
                            id="dashboard"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={()=>navigate('/vendor_dashboard')}
                            className="font-medium inline text-gray-700 hover:text-gray-900">
                                DASHBOARD
                        </motion.button>
                        <motion.button 
                            id="profile"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={()=>navigate('/vendor_profile')}
                            className="font-medium inline text-gray-700 hover:text-gray-900">
                            PROFILE
                        </motion.button>
                        <motion.button
                            id="contact"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={handleNavClick}
                            className="font-medium inline text-gray-700 hover:text-gray-900">
                                CONTACT US
                        </motion.button>
                        <motion.button 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={logout} 
                            className="font-medium inline text-red-500 hover:text-red-600">
                                LOG OUT
                        </motion.button>
                    </div>
                    :<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-12">
                        <motion.button
                            id="about"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={handleNavClick}
                            className="font-medium text-gray-700 hover:gray-900">ABOUT</motion.button>
                        <motion.button
                            id="track"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={handleNavClick}
                            className="font-medium text-gray-700 hover:gray-900">TRACK PACKAGE</motion.button>
                        <motion.button
                            id="contact"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={handleNavClick}
                            className="font-medium text-gray-700 hover:gray-900">CONTACT US</motion.button>
                        <motion.button 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={login} className="font-medium inline text-red-500 hover:text-red-600">VENDOR LOGIN</motion.button>
                    </div>}
            </nav>
        </div>
    );
}