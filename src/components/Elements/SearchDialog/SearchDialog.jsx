import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchStore from "../../../store/search";
import SelectCity from "../SelectCity/SelectCity";

export default function SearchDialog(){
    const navigate = useNavigate();
    const vendorsPath = '/find_vendors';
    const [searchState, setSearchState] = useState(searchStore.initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        switch(name){
            case 'source': setSearchState({...searchState, source: value});
                            break;
            case 'destination': setSearchState({...searchState, destination: value});
                            break;
            case 'weight': setSearchState({...searchState, weight: value});
                            break;
            case 'type': setSearchState({...searchState, type: value});
                            break;
            default: break;
        }
    };

    const handleSubmit = () => {
        searchStore.setSearch(searchState, navigate(vendorsPath));
    };

    return(
        <div className="p-12 bg-red-100 rounded-3xl shadow-lg">
            <form noValidate>
                <h3 className="font-bold text-3xl mb-8">Find the best Shipping Deals</h3>
                <div className="grid grid-cols-2 grid-rows-1 space-x-8">
                    <SelectCity name="source" onChange={handleChange} value={searchState.source} isSource={true}  />
                    <SelectCity name="destination" onChange={handleChange} value={searchState.destination} isSource={false}/>
                </div>
                <div className="grid grid-cols-2 grid-rows-1 space-x-8">
                    <div className="relative w-full">
                        <input type="number" name="weight" onBlur={handleChange} maxLength="3" defaultValue="0.1" className="mt-8 w-full form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Weight"/>
                        <span className="absolute text-gray-500 block z-9 top-10 right-4">Kgs</span>
                    </div>
                    <select
                        name="type"
                        onChange={handleChange}
                        defaultValue="Not selected"
                        className=" mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" >
                        <option value="Not selected" disabled>Select Package Type</option>
                        <option value="Documents" >Documents</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Food Items">Food items</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Glass_items">Glass items</option>
                    </select>
                    {/* <input type="text" className=" mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" /> */}
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary bg-red-500 hover:bg-red-600 w-full rounded-xl font-medium text-white py-3 mt-8">SEARCH VENDORS</button>
            </form>
        </div>
    );
}