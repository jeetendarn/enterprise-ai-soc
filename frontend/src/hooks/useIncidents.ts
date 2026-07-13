import {useEffect,useState} from "react";

import {Incident} from "../types/incident";

import {getIncidents} from "../services/incidentService";

export function useIncidents(){

const [incidents,setIncidents]=useState<Incident[]>([]);

const [loading,setLoading]=useState(true);

useEffect(()=>{

getIncidents()

.then(setIncidents)

.finally(()=>setLoading(false));

},[]);

return{

incidents,

loading,

};

}