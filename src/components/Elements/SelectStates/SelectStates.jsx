export default function SelectStates(){
    const states = [
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
    return(
        <select
            className="mt-8 w-full form-control px-3 py-1.5 text-base font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            placeholder="Select State">
                <option value="" disabled selected className="disabled:text-gray-400">Select State</option>
                {states.map((state)=><option value={state.label}>{state.label}</option>)}
        </select>
    );
}