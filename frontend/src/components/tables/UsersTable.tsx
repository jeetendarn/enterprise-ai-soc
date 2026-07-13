import { Eye,Pencil,Trash2 } from "lucide-react";

import UserRoleBadge from "../common/UserRoleBadge";
import UserStatusBadge from "../common/UserStatusBadge";

import type { User } from "../../services/user.service";

interface Props{
data:User[];
}

export default function UsersTable({data}:Props){

return(

<table className="w-full">

<thead>

<tr className="border-b border-[#243246]">

<th className="text-left p-4">Name</th>
<th>Email</th>
<th>Role</th>
<th>Department</th>
<th>Status</th>
<th>Last Login</th>
<th></th>

</tr>

</thead>

<tbody>

{

data.map(user=>(

<tr
key={user.id}
className="border-b border-[#1d2a3b] hover:bg-[#16253b]"
>

<td className="p-4">{user.name}</td>

<td>{user.email}</td>

<td>
<UserRoleBadge role={user.role}/>
</td>

<td>{user.department}</td>

<td>
<UserStatusBadge status={user.status}/>
</td>

<td>{user.lastLogin}</td>

<td className="flex gap-3 py-4">

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