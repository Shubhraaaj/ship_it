import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

export default function DestinationChart(){
    const data = [
        {
            "subject": "Delhi",
            "A": 10, // Received as source
            "fullMark": 40 // Total orders
        },
        {
            "subject": "Chandigarh",
            "A": 14,
            "fullMark": 40
        },
        {
            "subject": "Jaipur",
            "A": 5,
            "fullMark": 40
        },
        {
            "subject": "Manali",
            "A": 12,
            "fullMark": 40
        },
        {
            "subject": "Mumbai",
            "A": 19,
            "fullMark": 40
        },
        {
            "subject": "Hyderabad",
            "A": 16,
            "fullMark": 40
        },
        {
            "subject": "Chennai",
            "A": 35,
            "fullMark": 40
        },
        {
            "subject": "Kolkata",
            "A": 2,
            "fullMark": 40
        },
        {
            "subject": "Lucknow",
            "A": 8,
            "fullMark": 40
        },
        {
            "subject": "Indore",
            "A": 19,
            "fullMark": 40
        }
    ];
    return(
        <div>                         
            <RadarChart outerRadius={90} width={730} height={240} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 40]} />
                <Radar name="Destination city" dataKey="A" stroke="#8884d8" fill="#82ca9d" fillOpacity={0.6} />
                {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
                <Legend />
            </RadarChart>
        </div>
    );
}