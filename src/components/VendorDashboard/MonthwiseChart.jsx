import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

export default function MonthwiseChart({ details }){
    let dats = [];
    if(details?.January!==null){
        dats = [
            {
                "name": "January",
                "Orders": details.January.totalOrder,
                "Delivered": details.January.successOrder,
            },
            {
                "name": "February",
                "Orders": details.February.totalOrder,
                "Delivered": details.February.successOrder,
            },
            {
                "name": "March",
                "Orders": details.March.totalOrder,
                "Delivered": details.March.successOrder,
            },
            {
                "name": "April",
                "Orders": details.April.totalOrder,
                "Delivered": details.April.successOrder,
            },
            {
                "name": "May",
                "Orders": details.May.totalOrder,
                "Delivered": details.May.successOrder,
            },
            {
                "name": "June",
                "Orders": details.June.totalOrder,
                "Delivered": details.June.successOrder,
            },
            {
                "name": "July",
                "Orders": details.July.totalOrder,
                "Delivered": details.July.successOrder,
            },
            {
              "name": "August",
              "Orders": details.August.totalOrder,
              "Delivered": details.August.successOrder,
            },
            {
                "name": "September",
                "Orders": details.September.totalOrder,
                "Delivered": details.September.successOrder,
            },
            {
                "name": "October",
                "Orders": details.October.totalOrder,
                "Delivered": details.October.successOrder,
            },
            {
                "name": "November",
                "Orders": details.November.totalOrder,
                "Delivered": details.November.successOrder,
            },
            {
                "name": "December",
                "Orders": details.December.totalOrder,
                "Delivered": details.December.successOrder,
            }
        ];
    }
    
    return(
        <div>
            <p className="text-left font-medium text-xl mb-8">Monthwise Orders</p>                           
            <BarChart width={500} height={250} data={dats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Delivered" fill='#00C49F' opacity="0.75" />
                <Bar dataKey="Orders" fill='#0088FE' opacity="0.75" />
            </BarChart>
        </div>
    );
}