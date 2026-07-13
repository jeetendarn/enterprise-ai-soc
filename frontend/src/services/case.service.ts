import axios from "axios";

export interface Case {

    id:number;

    title:string;

    priority:string;

    status:string;

    analyst:string;

    incident:string;

    dueDate:string;

}

const api = axios.create({

    baseURL:"http://localhost:8000/api"

});

export default api;



export const getCases = async():Promise<Case[]>=>{

return [

{

id:1,

title:"Ransomware Investigation",

priority:"Critical",

status:"Open",

analyst:"John",

incident:"INC-1001",

dueDate:"Today"

},

{

id:2,

title:"Malware Analysis",

priority:"High",

status:"Investigating",

analyst:"Alice",

incident:"INC-1002",

dueDate:"Tomorrow"

},

{

id:3,

title:"Credential Dump",

priority:"Medium",

status:"Resolved",

analyst:"David",

incident:"INC-1003",

dueDate:"12 Jul"

},

{

id:4,

title:"IOC Validation",

priority:"Low",

status:"Closed",

analyst:"Sophia",

incident:"INC-1004",

dueDate:"15 Jul"

}

];

}