interface Props{

    title:string;

    value:number;

    color:string;

}

export default function CaseStats({

    title,

    value,

    color

}:Props){

    return(

        <div
        className="bg-[#132034] rounded-xl p-5 border border-[#20324d]"
        >

            <p className="text-gray-400">

                {title}

            </p>

            <h2
            className={`text-4xl font-bold mt-2 ${color}`}
            >
                {value}
            </h2>

        </div>

    );

}