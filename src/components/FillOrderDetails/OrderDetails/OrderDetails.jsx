import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import SelectStates from '../../Elements/SelectStates/SelectStates';

export default function OrderDetails({ isSender, details }){
    const [value, setValue] = useState(details);

    return(
        <div>
            <form>
                <div className="flex justify-between">
                    <p className="text-left font-medium text-lg text-gray-500">{isSender? "Sender Details":"Receiver Details"}</p>
                    {isSender && <input type="datetime-local" value={value.date} className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Pickup time" />}
                </div>
                <input type="text" name="name" value={value.name} className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender name":"Receiver name"} />
                <input type="text" name="phone" value={value.phone} maxLength="10" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender Phone number":"Receiver Phone number"} />
                <textarea type="text" rows="3" name="address" value={value.address} className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender Address":"Receiver Address"} />
                <div className="flex space-x-8 justify-between">
                    <SelectStates value={value.state} />
                    <input type="text" name="pincode" value={value.pincode} maxLength="6" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Source Pincode":"Receiver Pincode"} />
                </div>
            </form>
        </div>
    );
}