import { ShieldAlert } from "lucide-react";

import { useRecentThreats } from "../../hooks/useRecentThreats";

export default function ThreatFeed() {

    const {

        data = [],

        isLoading,

    } = useRecentThreats();

    return (

        <div className="feed-card">

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >

                <h3>

                    Live Threat Feed

                </h3>

                <span
                    style={{
                        color: "#22c55e",
                        fontSize: 13,
                    }}
                >

                    ● Live

                </span>

            </div>

            {

                isLoading ?

                (

                    <p>

                        Loading...

                    </p>

                )

                :

                data.length === 0 ?

                (

                    <p>

                        No Threats

                    </p>

                )

                :

                data.map((item:any)=>(

                    <div

                        key={item.id}

                        className="feed-item"

                    >

                        <ShieldAlert
                            size={16}
                            color="#ef4444"
                        />

                        <div>

                            <div>

                                {item.name}

                            </div>

                            <small
                                style={{
                                    color:"#94a3b8",
                                }}
                            >

                                {item.source}

                            </small>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}