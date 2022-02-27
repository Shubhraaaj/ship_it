import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loadingStore from "../../../store/loading";
import searchStore from "../../../store/search";
import SelectCity from "../../Elements/SelectCity/SelectCity";

export default function SearchBar(){
    const [searchState, setSearchState] = useState(searchStore.initialState);

    useLayoutEffect(()=>{
        searchStore.subscribe(setSearchState);
        searchStore.init();
    },[]);

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

    const handleClick = () => {
        searchStore.setSearch(searchState);
        // loadingStore.setLoading({loading: true});
    };
    
    return(
        <div className="flex flex-row space-x-8 p-8 shadow-md bg-white mx-20 mb-4 rounded-xl">
                <SelectCity name="source" value={searchState.source} onChange={handleChange} isSource autoFocus />
                <SelectCity name="destination" value={searchState.destination} onChange={handleChange} isSource={false} />
                <div className="relative">
                    <input type="number" name="weight" onChange={handleChange} maxLength="3" value={searchState.weight} className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Weight"/>
                    <span className="absolute text-gray-500 block z-9 top-2 right-4">Kgs</span>
                </div>
                <select
                    name="type"
                    onChange={handleChange}
                    value={searchState.type}
                    className="form-control px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" >
                    <option value="Not selected" disabled>Package Type</option>
                    <option value="Documents" >Documents</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Food Items">Food items</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Glass_items">Glass items</option>
                </select>
                <button type="button" onClick={handleClick} className="flex-1 bg-red-500 hover:bg-red-600 rounded-xl font-medium text-white">
                    SEARCH VENDORS
                </button>
        </div>
    );
}