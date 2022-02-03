export default function OrderDetails({ isSender }){
    return(
        <div className="px-8">
            <div className="flex justify-between">
                <p className="text-left font-medium text-xl text-gray-600">{isSender? "Sender Details":"Receiver Details"}</p>
                {isSender && <input type="datetime" class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Pickup time" />}
            </div>
            <input type="datetime" class="form-control block w-full mt-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender name":"Receiver name"} />
            <input type="datetime" class="form-control block w-full mt-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender Phone number":"Receiver Phone number"} />
            <input type="datetime" class="form-control block w-full mt-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Sender Address":"Receiver Address"} />
            <div className="grid grid-cols-2 space-x-4">
                <input type="datetime" class="form-control mt-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Source State":"Receiver State"} />
                <input type="datetime" class="form-control mt-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={isSender?"Source Pincode":"Receiver Pincode"} />
            </div>
        </div>
    );
}