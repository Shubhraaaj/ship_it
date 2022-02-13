import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import SelectStates from '../../Elements/SelectStates/SelectStates';

export default function OrderDetails({ isSender }){
    const cities = [
        { label: "Andhra Pradesh", value: 1 },
        { label: "Arunachal Pradesh", value: 2 },
        { label: "Assam", value: 3 },
        { label: "Bihar", value: 4 },
        { label: "Chhattisgarh", value: 5 },
        { label: "Goa", value: 6 },
        { label: "Gujarat", value: 7 },
        { label: "Haryana", value: 8 },
        { label: "Himachal Pradesh", value: 9 },
        { label: "Jammu and Kashmir", value: 10 },
        { label: "Jharkhand", value: 11 },
        { label: "Karnataka", value: 12 },
        { label: "Kerala", value: 13 },
        { label: "Madhya Pradesh", value: 14 },
        { label: "Maharashtra", value: 15 },
        { label: "Manipur", value: 16 },
        { label: "Meghalaya", value: 17 },
        { label: "Mizoram", value: 18 },
        { label: "Nagaland", value: 19 },
        { label: "Odisha", value: 20 },
        { label: "Punjab", value: 21 },
        { label: "Rajasthan", value: 22 },
        { label: "Sikkim", value: 23 },
        { label: "Tamil Nadu", value: 24 },
        { label: "Telangana", value: 25 },
        { label: "Tripura", value: 26 },
        { label: "Uttarakhand", value: 27 },
        { label: "Uttar Pradesh", value: 28 },
        { label: "West Bengal", value: 29 },
        { label: "Andaman and Nicobar Islands", value: 30 },
        { label: "Chandigarh", value: 31 },
        { label: "Dadra and Nagar Haveli", value: 32 },
        { label: "Daman and Diu", value: 33 },
        { label: "Delhi", value: 34 },
        { label: "Lakshadweep", value: 35 },
        { label: "Puducherry", value: 36 }
    ];
    const animatedComponents = makeAnimated();
    return(
        <div>
            <div className="flex justify-between">
                <p className="text-left font-medium text-lg text-gray-500">{isSender? "Sender Details":"Receiver Details"}</p>
                {isSender && <input type="datetime-local" className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Pickup time" />}
            </div>
            <input type="datetime" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender name":"Receiver name"} />
            <input type="datetime" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender Phone number":"Receiver Phone number"} />
            <input type="datetime" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender Address":"Receiver Address"} />
            <div className="flex space-x-8 justify-between">
                <SelectStates />
                <input type="datetime" className="form-control w-full mt-8 pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Source Pincode":"Receiver Pincode"} />
                {/* <input type="text" maxLength="6" className="pl-4 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Source Pincode":"Receiver Pincode"} /> */}
            </div>
        </div>
    );
}