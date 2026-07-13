export interface Asset{

    id:number;

    hostname:string;

    ip:string;

    os:string;

    owner:string;

    criticality:string;

    status:string;

    risk:number;

    lastSeen:string;

}

const assets:Asset[]=[

{

id:1,

hostname:"DC-01",

ip:"192.168.10.5",

os:"Windows Server",

owner:"IT",

criticality:"Critical",

status:"Online",

risk:94,

lastSeen:"1 min ago"

},

{

id:2,

hostname:"FIN-LAPTOP-12",

ip:"192.168.10.54",

os:"Windows 11",

owner:"Finance",

criticality:"High",

status:"Online",

risk:71,

lastSeen:"4 mins ago"

},

{

id:3,

hostname:"Ubuntu-Web-02",

ip:"10.0.0.15",

os:"Ubuntu",

owner:"DevOps",

criticality:"Medium",

status:"Offline",

risk:38,

lastSeen:"1 hour ago"

}

];

export async function getAssets(){

return Promise.resolve(assets);

}