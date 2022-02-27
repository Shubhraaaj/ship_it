import { useEffect } from "react";
import { Pie, PieChart } from "recharts";

export default function StatusCharts(){

    // useEffect(()=>{

    // },[]);

    const data01 = [
        {
          "name": "Pending",
          "value": 10
        },
        {
          "name": "Ongoing",
          "value": 4
        },
        {
          "name": "Delivered",
          "value": 2
        },
        {
          "name": "Rejected",
          "value": 8
        }
      ];
          
    return(
        <div>
            <p>Orders Status</p>
            <PieChart width={730} height={250}>
                <Pie 
                    data={data01} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={80} 
                    fill="#8884d8" 
                    label/>
            </PieChart>
        </div>
    );
}