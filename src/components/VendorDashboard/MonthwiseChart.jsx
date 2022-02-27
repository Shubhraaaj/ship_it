import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

export default function MonthwiseChart(){
    const data = [
        {
          "name": "January",
          "Orders": 90,
          "Delivered": 50
        },
        {
          "name": "February",
          "Orders": 80,
          "Delivered": 68
        },
        {
          "name": "March",
          "Orders": 120,
          "Delivered": 101
        },
        {
          "name": "April",
          "Orders": 67,
          "Delivered": 30
        },
        {
          "name": "May",
          "Orders": 20,
          "Delivered": 11
        }
      ];
    return(
        <div>
            <p className="text-left font-medium text-xl mb-8">Monthwise Orders</p>                           
            <BarChart width={500} height={250} data={data}>
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