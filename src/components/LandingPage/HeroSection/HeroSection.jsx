import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Refresh } from "../../Elements/Animation/Refresh";
import MainMenu from "../../Elements/MainMenu/MainMenu";

export default function HeroSection() {
    const [count, setCount] = useState(0);
    return (
        <div>
            {/* <MainMenu /> */}
            <div className="relative bg-white overflow-hidden">
                <div className="absolute">
                    <main className="mt-10 mx-12 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-16 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-4xl">
                                <span className="block xl:block">Your trusted </span>
                                <span className="block xl:inline">Shipping Partner</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                <span className="block xl:block">We ship happiness,</span>
                                <span className="block xl:inline">Delivering up on time always.</span>
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link to='/search'>
                                        <motion.p
                                            initial={{ scale: 0.9, visibility:"hidden" }}
                                            animate={{ scale: 1, visibility: "visible" }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10">
                                            I want to ship now
                                        </motion.p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="-mt-20">
                    <img className="w-full object-cover" src="https://i.ibb.co/Dpx1YBN/Untitled-design-1.png" alt="" />
                </div>
            </div>
        </div>
    );
}