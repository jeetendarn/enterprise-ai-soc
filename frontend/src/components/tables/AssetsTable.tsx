import { Eye,Pencil,Trash2 } from "lucide-react";

import type { Asset } from "../../services/asset.service";
import RiskBadge from "../common/RiskBadge";

import OnlineBadge from "../common/OnlineBadge";

interface Props{

data:Asset[];

}

export default function AssetsTable({

data

}:Props){

return(

<table className="w-full">

<thead>

<tr className="border-b border-[#243246]">

<th>ID</th>

<th>Hostname</th>

<th>IP</th>

<th>OS</th>

<th>Owner</th>

<th>Risk</th>

<th>Status</th>

<th>Last Seen</th>

<th></th>

</tr>

</thead>

<tbody>

{

data.map(asset=>(

<tr

key={asset.id}

className="border-b border-[#1f2f46] hover:bg-[#16253b]"

>

<td>{asset.id}</td>

<td>{asset.hostname}</td>

<td>{asset.ip}</td>

<td>{asset.os}</td>

<td>{asset.owner}</td>

<td>

<RiskBadge score={asset.risk}/>

</td>

<td>

<OnlineBadge status={asset.status}/>

</td>

<td>{asset.lastSeen}</td>

<td className="flex gap-3">

<Eye size={18}/>

<Pencil size={18}/>

<Trash2 size={18}/>

</td>

</tr>

))

}

</tbody>

</table>

);

}