import { useEffect, useRef, useState } from "react";

export default function ImageUpload({ image, onUpdate }){
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState(image?.length>0?[image]:["https://i.ibb.co/qyxLRfq/Shipit-logo-upload-1.jpg"]);
    const fileInput = useRef(null);

    const handleClick = () => {
        fileInput.current.click()
    };

    useEffect(() => {
        if(images.length<1) return;
        const newImageURL = [];
        images.forEach(image => newImageURL.push(URL.createObjectURL(image)));
        setImageURLs(newImageURL);
    },[images]);

    const onImageChange = (event) => {
        setImages([...event.target.files]);
        onUpdate([...event.target.files]);
    };

  return(
        <div className="rounded-xl shadow bg-white p-4 flex">
            <p className="flex-1 text-base font-medium text-middle self-center px-4 text-gray-600">Company LOGO</p>
            <img className="" onClick={handleClick} src={imageURLs[0]} className="w-80 h-60 mx-auto border-2" />
            <input ref={fileInput}  type="file" accept="image/*" onChange={onImageChange} className="hidden" />
        </div>
    );
}