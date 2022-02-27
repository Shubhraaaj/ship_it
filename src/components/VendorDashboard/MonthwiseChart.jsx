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
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Delivered" fill="#8884d8" />
            <Bar dataKey="Orders" fill="#82ca9d" />
        </BarChart>
        </div>
    );
}