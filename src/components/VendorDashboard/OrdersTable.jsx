export default function OrdersTable(){
    const orders = [
        {
            id: 100,
            orderId: 1,
            source: "Dhanbad",
            destination: "Patna",
            type: "Documents",
            bill: "520",
            priority: "Normal",
            status:"Pending"
        },
        {
            id: 101,
            orderId: 1,
            source: "Kolkata",
            destination: "Bangalore",
            type: "Electronics",
            bill: "1520",
            priority: "Priority",
            status:"Pending"
        },
        {
            id: 102,
            orderId: 1,
            source: "Delhi",
            destination: "Mumbai",
            type: "Documents",
            bill: "120",
            priority: "Normal",
            status:"Pending"
        },
        {
            id: 103,
            orderId: 1,
            source: "Jaipur",
            destination: "Indore",
            type: "Food Items",
            bill: "730",
            priority: "Normal",
            status:"Pending"
        },
        {
            id: 104,
            orderId: 1,
            source: "Dehradun",
            destination: "Haridwar",
            type: "Documents",
            bill: "324",
            priority: "Priority",
            status:"Pending"
        }
    ];
    return(
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-center">
                    <thead class="border-b bg-red-50">
                        <tr>
                            <th scope="col" class="text-sm font-medium text-gray-800 px-6 py-4">
                                Sl.No.
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-800 px-6 py-4">
                                Order ID
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-800 px-6 py-4">
                                Source
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-800 px-6 py-4">
                                Destination
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-800 px-6 py-4">
                                Type
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-800 px-6 py-4">
                                Bill
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-800 px-6 py-4">
                                Priority
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-800 px-6 py-4">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order,index)=>
                            <tr class="bg-white border-b">
                                <td class="px-auto py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {index+1}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.id}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.source}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.destination}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.type}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Rs.{order.bill}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.priority}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {/* {order.status} */}
                                    <select>
                                        <option value="Pending">Pending</option>
                                        <option value="Accepted">Accepted</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
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