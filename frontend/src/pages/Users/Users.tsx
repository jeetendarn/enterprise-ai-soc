import { useEffect,useState } from "react";

import { Search,Plus } from "lucide-react";

import type { User } from "../../services/user.service";
import { getUsers } from "../../services/user.service";
import UserStats from "../../components/cards/UserStats";

import UsersTable from "../../components/tables/UsersTable";

export default function Users(){

const [users,setUsers]=useState<User[]>([]);

const [search,setSearch]=useState("");

useEffect(()=>{

getUsers().then(setUsers);

},[]);

const filtered=users.filter(user=>

user.name.toLowerCase().includes(search.toLowerCase()) ||

user.email.toLowerCase().includes(search.toLowerCase())

);

return(

<div className="space-y-8">

<div className="flex justify-between">

<div>

<h1 className="text-3xl font-bold">

User Management

</h1>

<p className="text-gray-400">

Identity & Access Management

</p>

</div>

<button className="bg-cyan-500 hover:bg-cyan-600 rounded-lg px-5 py-3 flex gap-2">

<Plus/>

Create User

</button>

</div>

<div className="grid grid-cols-4 gap-6">

<UserStats title="Users" value={48} color="text-cyan-400"/>

<UserStats title="Admins" value={6} color="text-red-400"/>

<UserStats title="Analysts" value={22} color="text-green-400"/>

<UserStats title="Online" value={31} color="text-orange-400"/>

</div>

<div className="bg-[#132034] rounded-xl p-5">

<div className="flex gap-3 mb-5 items-center">

<Search/>

<input

className="bg-[#0b1627] rounded-lg p-3 w-80 outline-none"

placeholder="Search users..."

value={search}

onChange={e=>setSearch(e.target.value)}

/>

</div>

<UsersTable

data={filtered}

/>

</div>

</div>

);

}