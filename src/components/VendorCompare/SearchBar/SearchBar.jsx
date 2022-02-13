import { Link } from "react-router-dom";

export default function SearchBar(){
    return(
        <div className="flex flex-row space-x-4 p-8 shadow-md bg-white mx-20 mb-4 rounded-xl">
            <input type="text" className="pl-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Source" />
            <input type="text" className="pl-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Destination" />
            <input type="number" className="pl-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Weight" />
            <input type="text" className="pl-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" />
            <button type="button" className="flex-1 bg-red-500 hover:bg-red-600 rounded-3xl font-medium text-white">
                <Link to='/fill_order'>SEARCH VENDORS</Link>
            </button>
        </div>
    );
}