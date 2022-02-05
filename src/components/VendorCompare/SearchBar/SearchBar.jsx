export default function SearchBar(){
    return(
        <div className="flex space-x-8 p-8 shadow-md bg-red-50 m-8 rounded-xl">
            <input type="text" class="form-control px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Source" />
            <input type="text" class="form-control px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Destination" />
            <input type="number" class="form-control px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Weight" />
            <input type="text" class=" form-control px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Type" />
            <button type="button" class="btn btn-primary bg-red-500 w-full rounded-3xl font-medium text-white">SEARCH VENDORS</button>
        </div>
    );
}