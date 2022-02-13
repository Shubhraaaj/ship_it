import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function MultiSelect({ onUpdate }){
    const animatedComponents = makeAnimated();

    const [selected, setSelected] = useState([
        { label: "Dhanbad", value: 5 },
        { label: "Patna", value: 6 }
    ]);

    const Countries = [
        { label: "Mumbai", value: 1 },
        { label: "Delhi", value: 2 },
        { label: "Kolkata", value: 3 },
        { label: "Hyderabad", value: 4 },
        { label: "Dhanbad", value: 5 },
        { label: "Patna", value: 6 },
        { label: "Gwalior", value: 7 }
    ];

    useEffect(()=>{
        onUpdate(selected);
    },[selected]);

    return(
        <div className="p-4 rounded-xl shadow-md my-8 bg-white">
            <h4 className='text-base font-medium text-left mb-4 text-gray-600'>Operating Cities</h4>
            <Select 
                isMulti 
                options={Countries} 
                defaultValue={selected} 
                components={animatedComponents}
                onChange={(val)=>setSelected(val)}
                />
        </div>
    );
}   