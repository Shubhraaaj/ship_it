import { useState } from "react";

export default function OfficialPartners(){
    // const [images, setImages] = useState(["https://drive.google.com/file/d/1Ln0D1UQJyrVTMGGncdK5QUODVErga0_I/view?usp=sharing", "https://drive.google.com/file/d/1MLgRPMb9S7J25TE_AGRcrzBz9lXYrQ-p/view?usp=sharing", "https://drive.google.com/file/d/1c_bvjJceayof1y3DrdecWvU8lhTRtHuL/view?usp=sharing", "https://drive.google.com/file/d/1uexqZ7mz8wu1iXzALFufOV0Za6RXCe90/view?usp=sharing", "https://drive.google.com/file/d/1yddYjceN-PJZbaCQ66OkvUJESE5Pl0x0/view?usp=sharing"]);
    return(
        <div class="relative bg-white overflow-hidden my-20">
            <div class="max-w-7xl mx-auto">
                <p className="text-2xl font-medium">Official Partners</p>
                <div className="mt-12 mx-8 grid grid-cols-5 grid-rows-1">
                    {/* {
                        images.forEach(url => <img class="h-8 w-auto mx-auto sm:h-10" src={url} />)
                    } */}
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                </div>
            </div>
        </div>
    );
};