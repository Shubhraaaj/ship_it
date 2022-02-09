import { Link } from "react-router-dom";

export default function SearchBar(){
    return(
        <div className="flex flex-row space-x-4 p-8 shadow-md bg-red-50 mx-20 my-4 rounded-xl">
            <input type="text" class="pl-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Source" />
            <input type="text" class="pl-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Destination" />
            <input type="number" class="pl-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Weight" />
            <input type="text" class="pl-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" />
            <button type="button" class="flex-1 bg-red-500 hover:bg-red-600 rounded-3xl font-medium text-white">
                <Link to='/fill_order'>SEARCH VENDORS</Link>
            </button>
        </div>
    );
}