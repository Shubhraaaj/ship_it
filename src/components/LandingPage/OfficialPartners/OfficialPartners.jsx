import { useState } from "react";

export default function OfficialPartners(){
    // const [images, setImages] = useState(["https://drive.google.com/file/d/1Ln0D1UQJyrVTMGGncdK5QUODVErga0_I/view?usp=sharing", "https://drive.google.com/file/d/1MLgRPMb9S7J25TE_AGRcrzBz9lXYrQ-p/view?usp=sharing", "https://drive.google.com/file/d/1c_bvjJceayof1y3DrdecWvU8lhTRtHuL/view?usp=sharing", "https://drive.google.com/file/d/1uexqZ7mz8wu1iXzALFufOV0Za6RXCe90/view?usp=sharing", "https://drive.google.com/file/d/1yddYjceN-PJZbaCQ66OkvUJESE5Pl0x0/view?usp=sharing"]);
    return(
        <div className="relative bg-white overflow-hidden my-10">
            <div className="max-w-7xl mx-auto">
                <p className="text-2xl text-gray-600 font-medium">Official Partners</p>
                <div className="mx-8 grid grid-cols-5 grid-rows-1">
                    {/* {
                        images.forEach(url => <img className="h-8 w-auto mx-auto sm:h-10" src={url} />)
                    } */}
                    <img className="h-40 mx-auto" src="https://i.ibb.co/DfYyFP1/Click-to-add-a-heading-2.jpg" />
                    <img className="h-40 mx-auto" src="https://i.ibb.co/pw8Ymkg/Click-to-add-a-heading-3.jpg" />
                    <img className="h-40 mx-auto" src="https://i.ibb.co/cXD62yg/Click-to-add-a-heading.jpg" />  
                    <img className="h-40 mx-auto" src="https://i.ibb.co/2Mc59XR/Click-to-add-a-heading-4.jpg" />
                    <img className="h-40 mx-auto" src="https://i.ibb.co/YW4zYdN/Click-to-add-a-heading-1.jpg" />
                </div>
            </div>
        </div>
    );
};