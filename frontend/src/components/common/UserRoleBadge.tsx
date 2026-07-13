interface Props{
role:string;
}

export default function UserRoleBadge({role}:Props){

return(

<span className="bg-cyan-600 text-xs px-3 py-1 rounded-full">
{role}
</span>

);

}