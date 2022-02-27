import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

export default function SourceChart({ details }){
    let dats = [];
    let max = 10;
    if(details?.delhi!==undefined){
        console.log('dps', details);
        max = Math.max(details.delhi, details.chandigarh, details.chennai, details.hydrabad, details.indore,
            details.jaipur, details.kolkata, details.lucknow, details.manali, details.mumbai);
        dats=[
            {
                "city": "Delhi",
                "orders": details.delhi,
                "full": max
            },
            {
                "city": "Chandigarh",
                "orders": details.chandigarh,
                "full": max
            },
            {
                "city": "Chennai",
                "orders": details.chennai,
                "full": max
            },
            {
                "city": "Hydrabad",
                "orders": details.hydrabad,
                "full": max
            },
            {
                "city": "Indore",
                "orders": details.indore,
                "full": max
            },
            {
                "city": "Jaipur",
                "orders": details.jaipur,
                "full": max
            },
            {
                "city": "Kolkata",
                "orders": details.kolkata,
                "full": max
            },
            {
                "city": "Lucknow",
                "orders": details.lucknow,
                "full": max
            },
            {
                "city": "Manali",
                "orders": details.manali,
                "full": max
            },
            {
                "city": "Mumbai",
                "orders": details.mumbai,
                "full": max
            }
        ];
    }
    return(
        <div>         
            <p className="text-left font-medium text-xl mb-8">Top Cities as Source</p>                
            <RadarChart outerRadius={90} width={500} height={250} data={dats}>
                <PolarGrid />
                <PolarAngleAxis dataKey="city" />
                <PolarRadiusAxis angle={30} domain={[0, max]} />
                <Radar name="Source city" dataKey="orders" stroke="#8884d8" fill='#FF8042' fillOpacity={0.6} />
                {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
                {/* <Legend /> */}
            </RadarChart>
        </div>
    );
}