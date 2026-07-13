interface Props{

status:string;

}

export default function IncidentStatusBadge({

status,

}:Props){

const styles={

Open:"bg-red-600",

Investigating:"bg-yellow-500",

Resolved:"bg-green-600",

};

return(

<span

className={`

px-3

py-1

rounded-full

text-white

text-xs

${styles[status as keyof typeof styles]}

`}

>

{status}

</span>

);

}