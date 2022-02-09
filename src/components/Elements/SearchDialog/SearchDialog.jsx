import { Link } from "react-router-dom";

export default function SearchDialog(){
    return(
        <div className="p-12 bg-red-100 rounded-3xl shadow-lg">
            <h3 className="font-bold text-3xl">Find the best Shipping Deals</h3>
            <div className="grid grid-cols-2 grid-rows-1 space-x-8">
                <input type="text" class="mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Source" />
                <input type="text" class="mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Destination" />
            </div>
            <div className="grid grid-cols-2 grid-rows-1 space-x-8">
                <input type="number" class="mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Weight" />
                <input type="text" class=" mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" />
            </div>
            <Link to='/find_vendors'>
                <button type="button" class="btn btn-primary bg-red-500 hover:bg-red-600 w-full rounded-xl font-medium text-white py-3 mt-8">SEARCH VENDORS</button>
            </Link>
        </div>
    );
}