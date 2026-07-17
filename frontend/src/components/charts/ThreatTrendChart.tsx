import {

ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,

} from "recharts";

import { useThreatTrend } from "../../hooks/useThreatTrend";

export default function ThreatTrendChart(){

    const{

        data=[],

        isLoading,

    }=useThreatTrend();

    if(isLoading){

        return <h3>Loading...</h3>;

    }

    return(

        <div className="chart-card">

            <h3>

                Threat Trend

            </h3>

            <ResponsiveContainer

                width="100%"

                height={300}

            >

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3"/>

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