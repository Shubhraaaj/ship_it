import { Link } from "react-router-dom";
import SelectCity from "../SelectCity/SelectCity";

export default function SearchDialog(){
    return(
        <div className="p-12 bg-red-100 rounded-3xl shadow-lg">
            <h3 className="font-bold text-3xl">Find the best Shipping Deals</h3>
            <div className="grid grid-cols-2 grid-rows-1 space-x-8">
                <SelectCity isSource/>
                <SelectCity />
            </div>
            <div className="grid grid-cols-2 grid-rows-1 space-x-8">
                <div className="relative w-full">
                    <input type="text" maxLength="3" defaultValue="0.1" className="mt-8 w-full form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Weight" autofocus="autofocus"/>
                    <span className="absolute text-gray-500 block z-9 top-10 right-4">grams</span>
                </div>
                <select
                    className=" mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" >
                    <option value="" disabled selected>Select Package Type</option>
                    <option>Documents</option>
                    <option>Electronics</option>
                    <option>Food items</option>
                    <option>Furniture</option>
                    <option>Glass items</option>
                </select>
                {/* <input type="text" className=" mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" /> */}
            </div>
            <Link to='/find_vendors'>
                <button type="button" className="btn btn-primary bg-red-500 hover:bg-red-600 w-full rounded-xl font-medium text-white py-3 mt-8">SEARCH VENDORS</button>
            </Link>
        </div>
    );
}