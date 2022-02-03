export default function TrackOrder(){
    return(
        <div class="relative bg-white overflow-hidden my-20">
            <div class="max-w-7xl mx-auto">
                <p className="text-3xl font-medium">Track Order</p>
                <div className="bg-black w-24 h-0.5 mx-auto my-4" />
            </div>
            <div className="flex justify-center mt-8">
                <input type="text" class="form-control block w-2/5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Tracking number" />
                <button className="ml-12 shadow border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-12 py-4 rounded-md">TRACK NOW</button>
            </div>
        </div>
    );
}