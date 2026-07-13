interface Props{
status:string;
}

export default function UserStatusBadge({status}:Props){

const color=status==="Active"
?"bg-green-500"
:"bg-red-500";

return(

<span className={`${color} text-xs px-3 py-1 rounded-full`}>
{status}
</span>

);

}