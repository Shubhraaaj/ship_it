export default function VendorTable(){
    const vendors = [
        {
            name: "DTDC",
            deliveryTime: "2",
            ratings: "4.1",
            normalPrice: "420",
            priorityPrice: "650"
        },
        {
            name: "Delhivery",
            deliveryTime: "2",
            ratings: "3.5",
            normalPrice: "350",
            priorityPrice: "500"
        },
        {
            name: "Gati",
            deliveryTime: "3",
            ratings: "4.1",
            normalPrice: "720",
            priorityPrice: "1050"
        },
        {
            name: "Ekart",
            deliveryTime: "4",
            ratings: "4",
            normalPrice: "220",
            priorityPrice: "350"
        },
        {
            name: "Firstflight",
            deliveryTime: "1",
            ratings: "4.1",
            normalPrice: "820",
            priorityPrice: "1650"
        }
    ];

    return(
        <div className="flex flex-col mx-20">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-100">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Vendor
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Normal Delivery
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Normal Tariff
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Priority Delivery
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Priority Tariff
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.map((vendor)=>
                            <tr className="bg-white border-b">
                                <td className="px-auto py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {vendor.name}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {Number(vendor.deliveryTime)+1} Days
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <button className="btn btn-primary bg-red-400 px-4 py-1 rounded-md text-white font-medium">Rs.{vendor.normalPrice}</button>
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {vendor.deliveryTime} Days
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <button className="btn btn-primary bg-green-500 px-4 py-1 rounded-md text-white font-medium">Rs.{vendor.priorityPrice}</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
}