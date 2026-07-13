import { useEffect,useState } from "react";

import { Plus,Search } from "lucide-react";

import AssetStats from "../../components/cards/AssetStats";

import AssetsTable from "../../components/tables/AssetsTable";

import { getAssets } from "../../services/asset.service";
import type { Asset } from "../../services/asset.service";
export default function Assets(){

const [assets,setAssets]=useState<Asset[]>([]);

const [search,setSearch]=useState("");

useEffect(()=>{

getAssets().then(setAssets);

},[]);

const filtered=assets.filter(asset=>

asset.hostname.toLowerCase().includes(search.toLowerCase()) ||

asset.owner.toLowerCase().includes(search.toLowerCase())

);

return(

<div className="space-y-8">

<div className="flex justify-between items-center">

<div>

<h1 className="text-3xl font-bold">

Asset Inventory

</h1>

<p className="text-gray-400">

Enterprise endpoint inventory

</p>

</div>

<button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg flex gap-2">

<Plus/>

Add Asset

</button>

</div>

<div className="grid grid-cols-4 gap-6">

<AssetStats title="Total Assets" value={1543} color="text-cyan-400"/>

<AssetStats title="Online" value={1450} color="text-green-400"/>

<AssetStats title="Offline" value={93} color="text-red-400"/>

<AssetStats title="Critical" value={58} color="text-orange-400"/>

</div>

<div className="bg-[#132034] rounded-xl p-5">

<div className="flex items-center gap-3 mb-5">

<Search size={18}/>

<input

className="bg-[#0b1627] p-3 rounded-lg w-80 outline-none"

placeholder="Search hostname..."

value={search}

onChange={e=>setSearch(e.target.value)}

/>

</div>

<AssetsTable

data={filtered}

/>

</div>

</div>

);

}