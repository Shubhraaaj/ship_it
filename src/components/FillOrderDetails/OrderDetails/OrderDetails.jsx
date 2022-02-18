import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import SelectStates from '../../Elements/SelectStates/SelectStates';

export default function OrderDetails({ isSender, onChange }){
    const [val, setVal] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch(name){
            case 'name': setVal({ ...val, name: value });
                            break;
            case 'pickup': setVal({ ...val, pickup: value });
                            break;
            case 'phone': setVal({ ...val, phone: value });
                            break;
            case 'address': setVal({ ...val, address: value });
                            break;
            case 'state': setVal({ ...val, state: value });
                            break;
            case 'pincode': setVal({ ...val, pincode: value });
                            break;
        }
    };

    useEffect(()=>{
        onChange(val);
    },[val]);

    return(
        <div>
            <form>
                <div className="flex justify-between">
                    <p className="text-left font-medium text-lg text-gray-500">{isSender? "Sender Details":"Receiver Details"}</p>
                    {isSender && <input type="datetime-local" name="pickup" onBlur={handleInputChange} className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Pickup time" />}
                </div>
                <input type="text" onBlur={handleInputChange} name="name" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender name":"Receiver name"} />
                <input type="text" onBlur={handleInputChange} name="phone" maxLength="10" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender Phone number":"Receiver Phone number"} />
                <textarea type="text" rows="3" onBlur={handleInputChange} name="address" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender Address":"Receiver Address"} />
                <div className="flex space-x-8 justify-between">
                    <SelectStates handle={handleInputChange} />
                    <input type="text" onBlur={handleInputChange} name="pincode" maxLength="6" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Source Pincode":"Receiver Pincode"} />
                </div>
            </form>
        </div>
    );
}