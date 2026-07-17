import { FolderKanban } from "lucide-react";

import { useRecentCases } from "../../hooks/useRecentCases";

export default function RecentCases(){

    const{

        data=[],

        isLoading,

    }=useRecentCases();

    return(

        <div className="feed-card">

            <div
                style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginBottom:20,
                }}
            >

                <h3>

                    Recent Cases

                </h3>

                <span
                    style={{
                        color:"#22c55e",
                        fontSize:13,
                    }}
                >

                    Live

                </span>

            </div>

            {

                isLoading?

                <p>Loading...</p>

                :

                data.length===0?

                <p>No Cases</p>

                :

                data.map((item:any)=>(

                    <div

                        key={item.id}

                        className="feed-item"

                    >

                        <FolderKanban

                            size={16}

                            color="#00d4ff"

                        />

                        <div>

                            <div>

                                {item.title}

                            </div>

                            <small
                                style={{
                                    color:"#94a3b8",
                                }}
                            >

                                {item.priority} • {item.status}

                            </small>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}