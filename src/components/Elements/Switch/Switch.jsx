import { useState } from 'react';
import './Switch.css';

export default function Switch({ priority, onChange }){

    return(
        <div class="flex">
            <label 
                for="toogleA"
                class="flex items-center cursor-pointer"
            >
                <div class="relative">
                <input id="toogleA" type="checkbox" onChange={()=>onChange(!priority)} checked={priority} class="sr-only" />
                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div class="ml-3 text-gray-700 font-medium">Priority</div>
            </label>
        </div>
    );
};