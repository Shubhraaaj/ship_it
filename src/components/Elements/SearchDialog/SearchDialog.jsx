import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchStore from "../../../store/search";
import SelectCity from "../SelectCity/SelectCity";
import './SearchDialog.css';

export default function SearchDialog(){
    const navigate = useNavigate();
    const vendorsPath = '/find_vendors';
    const [searchState, setSearchState] = useState(searchStore.initialState);
    const [error, setError] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (e) => {
        const {name, value} = e.target;
        let formerror = formErrors;
        switch(name){
            case 'source': 
                            if(value==="Not selected"){
                                formerror[name]=`Select source city`;
                            }else{
                                delete formerror.name;
                                setSearchState({...searchState, source: value});
                            }
                            break;
            case 'destination':
                            if(value==="Not selected"){
                                formerror[name]=`Select destination city`;
                            }else{
                                delete formerror.name;
                                setSearchState({...searchState, destination: value});
                            }
                            break;
            case 'weight': 
                            setSearchState({...searchState, weight: value});
                            break;
            case 'type': 
                            if(value==="Not selected"){
                                formerror[name]=`Select parcel type`;
                            }else{
                                delete formerror.name;
                                setSearchState({...searchState, type: value});
                            }
                            break;
            default: break;
        }
        setFormErrors(formerror);
    };

    const handleSubmit = () => {
        if(searchState.source==="Not selected"){
            setError("Select source");
            return;
        }
        if(searchState.destination==="Not selected"){
            setError("Select destination");
            return
        }
        if(searchState.type==="Not selected"){
            setError("Select parcel type");
            return;
        }
        searchStore.setSearch(searchState, navigate(vendorsPath));
    };

    return(
        <div className="p-12 bg-red-100 rounded-3xl shadow-lg">
            <form noValidate>
                <h3 className="font-bold text-3xl mb-4">Find the best Shipping Deals</h3>
                {error.length>0 && <p className="text-md font-medium text-red-600 mb-4">{error}</p>}
                <div className="grid grid-cols-2 grid-rows-1 space-x-8">
                    <SelectCity name="source" onChange={handleChange} value={searchState.source} isSource={true}  />
                    <SelectCity name="destination" onChange={handleChange} value={searchState.destination} isSource={false}/>
                </div>
                <div className="grid grid-cols-2 grid-rows-1 space-x-8">
                    <div className="relative w-full">
                        <input type="number" name="weight" onBlur={handleChange} maxLength="3" defaultValue="0.1" className="mt-8 w-full app form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Weight"/>
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
                </div>
                <button 
                    type="button" 
                    onClick={handleSubmit} 
                    disabled={Object.entries(formErrors||{}).length > 0}
                    className="btn btn-primary disabled:bg-gray-500 bg-red-500 hover:bg-red-600 w-full rounded-xl font-medium text-white py-3 mt-8"
                    >
                    SEARCH VENDORS
                </button>
            </form>
        </div>
    );
}