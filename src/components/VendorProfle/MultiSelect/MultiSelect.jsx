import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function MultiSelect({ service_cities, onUpdate }){
    const animatedComponents = makeAnimated();
    
    const [selected, setSelected] = useState([]);

    useEffect(()=>{
        if(service_cities?.length>0&&service_cities!==undefined)
        {
            const vals = service_cities.map(city=>city.toLowerCase());
            let fullState = [];
            for(let i in service_cities){
                let mem = {
                    label: service_cities[i], 
                    value: vals[i]
                };
                fullState=[...fullState, mem];
                if(fullState.length===service_cities.length){
                    setSelected(fullState);
                }
            }
        }
    },[service_cities]);

    const cities = [
        { label: "Delhi", value: "delhi" },
        { label: "Chandigarh", value: "chandigarh" },
        { label: "Jaipur", value: "jaipur" },
        { label: "Manali", value: "manali" },
        { label: "Mumbai", value: "mumbai" },
        { label: "Hyderabad", value: "hyderabad" },
        { label: "Chennai", value: "chennai" },
        { label: "Kolkata", value: "kolkata" },
        { label: "Lucknow", value: "lucknow" },
        { label: "Indore", value: "indore" }
    ];

    const handleChange = (val) => {
        setSelected(val);
        onUpdate(val);
    };

    return(
        <div className="p-4 rounded-xl shadow-md my-8 bg-white">
            <h4 className='text-base font-medium text-left mb-4 text-gray-600'>Operating Cities</h4>
            <Select 
                isMulti 
                options={cities} 
                value={selected}
                components={animatedComponents}
                onChange={(val)=>handleChange(val)}
                />
        </div>
    );
}   