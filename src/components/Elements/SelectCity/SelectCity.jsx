export default function SelectCity({ name, isSource, value, onChange, autoFocus }){
    const cities = [
        "Delhi",
        "Chandigarh",
        "Jaipur",
        "Manali",
        "Mumbai",
        "Hydrabad",
        "Chennai",
        "Kolkata",
        "Lucknow",
        "Indore",
    ];
    return(
        <select
            name={name}
            onChange={onChange}
            value={value}
            autoFocus={autoFocus?"autoFocus":"none"}
            className="form-control pl-4 pr-8 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
            <option value="Not selected" disabled>{isSource?"Source":"Destination"} City</option>
            {cities.map((city)=><option key={city} value={city}>{city}</option>)}
        </select>
    );
}