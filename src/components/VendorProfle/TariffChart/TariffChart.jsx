import { useRef, useState } from "react";

export default function TariffChart(){
    const fileInput = useRef(null);
    const [filename, setFilename] = useState("Click to select file");
    const handleClick = () => {
        fileInput.current.click();
    };
    const handleExcel = (event) =>{
        setFilename(event.target.value);
    };

    return(
        <div className="p-4 shadow-md bg-white rounded-xl">
            <div className="flex justify-between">
                <h4 className="font-medium text-base text-gray-600">Tariff Chart</h4>
                <p>
                    {/* <span className="text-md text-gray-600 mr-2">Sample excel sheet</span> */}
                    <a className="font-medium text-red-400 underline">Download Sample</a>
                </p>
            </div>
            <div className="border rounded-3xl flex mt-4 justify-between">
                <p onClick={handleClick} className="px-6 text-base font-medium text-gray-600 py-2 flex-1 text-left" >{filename}</p>
                <input ref={fileInput} type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleExcel} className="px-8 py-2 hidden" />
                <button type="button" className="bg-red-400 font-medium text-white rounded-3xl px-8">UPLOAD CHART</button>
            </div>
        </div>
    );
}