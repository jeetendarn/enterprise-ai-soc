interface Props{

title:string;

value:number|string;

color:string;

}

export default function AssetStats({

title,

value,

color

}:Props){

return(

<div className="bg-[#132034] rounded-xl p-6 border border-[#20324d]">

<p className="text-gray-400">

{title}

</p>

<h1 className={`text-4xl font-bold mt-3 ${color}`}>

{value}

</h1>

</div>

);

}