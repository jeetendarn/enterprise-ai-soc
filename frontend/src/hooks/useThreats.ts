import { useEffect,useState } from "react";


import type { Threat } from "../types/threat";

import { getThreats } from "../services/threatService";

export function useThreats(){

const [threats,setThreats]=useState<Threat[]>([]);

const [loading,setLoading]=useState(true);

useEffect(()=>{

getThreats()

.then(setThreats)

.finally(()=>setLoading(false));

},[]);

return{

threats,

loading,

};

}