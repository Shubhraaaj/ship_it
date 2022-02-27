import { useEffect } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

export default function StatusCharts({ details }){
    let dats = [];
    if(details?.ordered!==undefined){
        dats = [
          {
            "name": "Pending",
            "value": details.ordered
          },
          {
            "name": "Ongoing",
            "value": details.intransit
          },
          {
            "name": "Delivered",
            "value": details.delivered
          },
          {
            "name": "Rejected",
            "value": details.rejected
          }
        ];
    }
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);
    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //         {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };
          
    return(
        <div>
            <p className="text-left font-medium text-xl">Orders Status</p>
            <PieChart width={500} height={250}>
                <Pie 
                    data={dats} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={80} 
                    fill="#8884d8" 
                    >
                        {dats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity="0.75" />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
            </PieChart>
        </div>
    );
}