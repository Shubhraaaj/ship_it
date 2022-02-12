import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainMenu({ isWhite }){
    const vendor = window.location.href.endsWith("ile");

    return(
        <div className={isWhite?"relative py-6 px-4 sm:px-6 lg:px-20 bg-white":"relative py-6 px-4 sm:px-6 lg:px-20 bg-red-50"}>
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div class="flex items-center justify-between w-full md:w-auto">
                        <Link to="/"><a href="#">
                        <span class="sr-only">Shipit</span>
                            <h1 className="text-3xl font-bold"><span className="text-gray-800">Ship</span><span className="text-red-500">it.</span></h1>
                            {/* <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" /> */}
                        </a></Link>
                        <div class="-mr-2 flex items-center md:hidden">
                        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-12">
                    <a href="#" class="font-medium text-gray-700 hover:gray-900">ABOUT</a>

                    <a href="#" class="font-medium text-gray-700 hover:text-gray-900">TRACK PACKAGE</a>

                    <a href="#" class="font-medium text-gray-700 hover:text-gray-900">CONTACT US</a>
                    <Link to={!vendor?'/vendor_login':'/vendor_dashboard'}>
                        <a href="#" class="font-medium text-red-500 hover:text-red-600">{!vendor?"VENDOR LOGIN":"DASHBOARD"}</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}