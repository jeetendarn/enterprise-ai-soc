interface Props {
    value: string;
}

export default function StatusBadge({ value }: Props) {

    const colors: Record<string, string> = {

        Open: "bg-red-500/20 text-red-400",

        Closed: "bg-green-500/20 text-green-400",

        "In Progress": "bg-yellow-500/20 text-yellow-400",

        Investigating: "bg-blue-500/20 text-blue-400",

        Resolved: "bg-emerald-500/20 text-emerald-400",

        Active: "bg-cyan-500/20 text-cyan-400",

        Offline: "bg-gray-500/20 text-gray-400",

        default: "bg-slate-500/20 text-slate-300",
    };

    return (

        <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                colors[value] || colors.default
            }`}
        >
            {value}
        </span>

    );
}