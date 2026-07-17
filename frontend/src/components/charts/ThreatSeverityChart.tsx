import{

PieChart,
Pie,
Cell,
ResponsiveContainer,
Tooltip,

}from "recharts";

import { useSeverityChart } from "../../hooks/useSeverityChart";

const colors={

Critical:"#ff4d6d",

High:"#ff9800",

Medium:"#ffd54f",

Low:"#00d4ff",

};

export default function ThreatSeverityChart(){

    const{

        data=[],

        isLoading,

    }=useSeverityChart();

    if(isLoading){

        return <h3>Loading...</h3>;

    }

    return(

        <div className="chart-card">

            <h3>

                Threat Severity

            </h3>

            <ResponsiveContainer

                width="100%"

                height={300}

            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                        nameKey="name"

                        outerRadius={100}

                    >

                        {

                            data.map((item:any,index:number)=>

                                <Cell

                                    key={index}

                                    fill={

                                        colors[item.name as keyof typeof colors]

                                        ||

                                        "#8884d8"

                                    }

                                />

                            )

                        }

                    </Pie>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}