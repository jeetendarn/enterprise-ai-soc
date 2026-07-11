import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { day: "Mon", threats: 40 },
    { day: "Tue", threats: 65 },
    { day: "Wed", threats: 32 },
    { day: "Thu", threats: 90 },
    { day: "Fri", threats: 71 },
    { day: "Sat", threats: 110 },
    { day: "Sun", threats: 84 },
];

export default function ThreatTrendChart() {

    return (

        <div className="chart-card">

            <h3>Threat Trend</h3>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="day"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line

                        type="monotone"

                        dataKey="threats"

                        stroke="#00d4ff"

                        strokeWidth={3}

                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}