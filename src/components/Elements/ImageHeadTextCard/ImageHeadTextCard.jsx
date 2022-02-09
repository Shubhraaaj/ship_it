export default function ImageHeadTextCard({ title, description, imageurl }){
    return(
        <div class="flex justify-center m-4">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <img class="h-24 mx-auto my-4" src={imageurl} alt=""/>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p class="text-gray-700 text-base">{description}</p>
                </div>
            </div>
        </div>
    );
}

/**
 * Pages
 * Components - Combination of elements
 * Elements
 * 
 */