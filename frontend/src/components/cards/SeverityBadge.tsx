interface Props{

severity:string;

}

export default function SeverityBadge({

severity,

}:Props){

const styles={

Critical:"bg-red-600",

High:"bg-orange-500",

Medium:"bg-yellow-500",

Low:"bg-green-500",

};

return(

<span

className={`

px-3

py-1

rounded-full

text-xs

font-semibold

text-white

${styles[severity as keyof typeof styles]}

`}

>

{severity}

</span>

);

}