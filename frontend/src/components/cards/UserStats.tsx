interface Props{
    title:string;
    value:number;
    color:string;
}

export default function UserStats({title,value,color}:Props){

return(

<div className="bg-[#132034] rounded-xl border border-[#243246] p-5">

<p className="text-gray-400">{title}</p>

<h1 className={`text-4xl font-bold mt-3 ${color}`}>
{value}
</h1>

</div>

);

}