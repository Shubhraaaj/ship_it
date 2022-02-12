export default function SelectCity({ isSource }){
    const cities = [
        "Agra",
        "Delhi",
        "Gurgaon",
        "Amritsar",
        "Chandigarh",
        "Dhanbad",
        "Ranchi",
        "Patna",
        "Gaya",
        "Mumbai",
        "Bangalore",
        "Hyderabad",
        "Jaipur",
        "Udaipur",
        "Kolkata",
        "Raipur",
        "Bhubaneshwar",
        "Rourkela",
        "Dehradun",
        "Haridwar",
        "Mysore"
    ];
    return(
        <select
            className="mt-8 form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
            <option value="" disabled selected>Select {isSource?"Source":"Destination"} City</option>
            {cities.map((city)=><option value={city}>{city}</option>)}
        </select>
    );
}