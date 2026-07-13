interface Props {
    value: string;
}

export default function SeverityBadge({ value }: Props) {

    const colors: Record<string, string> = {

        Critical: "bg-red-600 text-white",

        High: "bg-orange-500 text-white",

        Medium: "bg-yellow-400 text-black",

        Low: "bg-green-500 text-white",

        Informational: "bg-cyan-500 text-white",

        default: "bg-slate-600 text-white",
    };

    return (

        <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
                colors[value] || colors.default
            }`}
        >
            {value}
        </span>

    );
}