import {
Shield,
Database,
Bell,
Key,
Server,
Globe
} from "lucide-react";

const settings=[

{
icon:Shield,
title:"Security Settings",
desc:"Authentication, MFA, Password Policy"
},

{
icon:Key,
title:"API Keys",
desc:"Manage API tokens"
},

{
icon:Database,
title:"Database",
desc:"Backup & Restore"
},

{
icon:Server,
title:"Infrastructure",
desc:"Docker, Kubernetes, Services"
},

{
icon:Bell,
title:"Notifications",
desc:"Email, Slack, Teams"
},

{
icon:Globe,
title:"Threat Intelligence",
desc:"MISP, VirusTotal, AlienVault"
}

];

export default function Settings(){

return(

<div>

<h1 className="text-3xl font-bold mb-8">

Platform Settings

</h1>

<div className="grid grid-cols-3 gap-6">

{

settings.map((item,index)=>{

const Icon=item.icon;

return(

<div

key={index}

className="bg-[#132034] rounded-xl border border-[#243246] p-6 hover:border-cyan-500 transition"

>

<Icon
size={34}
className="text-cyan-400 mb-4"
/>

<h2 className="text-xl font-semibold">

{item.title}

</h2>

<p className="text-gray-400 mt-2">

{item.desc}

</p>

</div>

);

})

}

</div>

</div>

);

}