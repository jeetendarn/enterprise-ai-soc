import { useEffect, useState } from "react";
import {
    Plus,
    FolderKanban,
    Clock3,
    ShieldAlert,
    CheckCircle2,
} from "lucide-react";

import CasesTable from "../../components/tables/CasesTable";
import { getCases } from "../../services/case.service";
import type { Case } from "../../services/case.service";

export default function Cases() {

    const [cases, setCases] = useState<Case[]>([]);

    useEffect(() => {
        getCases().then(setCases);
    }, []);

    return (

        <div className="space-y-8">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold text-white">
                        Case Management
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Enterprise SOC Investigation Workflow
                    </p>

                </div>

                <button
                    className="
                    flex items-center gap-2
                    bg-cyan-500
                    hover:bg-cyan-400
                    transition
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    "
                >
                    <Plus size={18} />
                    Create Case
                </button>

            </div>

            {/* KPI */}

            <div className="grid grid-cols-4 gap-6">

                <Card
                    title="Open Cases"
                    value="17"
                    color="text-red-400"
                    icon={<FolderKanban />}
                />

                <Card
                    title="In Progress"
                    value="8"
                    color="text-yellow-400"
                    icon={<Clock3 />}
                />

                <Card
                    title="Closed"
                    value="31"
                    color="text-green-400"
                    icon={<CheckCircle2 />}
                />

                <Card
                    title="SLA Violations"
                    value="2"
                    color="text-cyan-400"
                    icon={<ShieldAlert />}
                />

            </div>

            {/* Table */}

            <div
                className="
                rounded-xl
                bg-[#162235]
                border
                border-[#243246]
                shadow-xl
                "
            >

                <div className="p-6 border-b border-[#243246]">

                    <h2 className="text-xl font-semibold">
                        Active Investigations
                    </h2>

                </div>

                <div className="overflow-auto">

                    <CasesTable
                        data={cases}
                    />

                </div>

            </div>

        </div>

    );

}

function Card({
    title,
    value,
    color,
    icon,
}: any) {

    return (

        <div
            className="
            bg-[#162235]
            rounded-xl
            border
            border-[#243246]
            p-6
            hover:border-cyan-500
            transition
            "
        >

            <div className="flex justify-between">

                <div>

                    <p className="text-gray-400">

                        {title}

                    </p>

                    <h2
                        className={`text-4xl font-bold mt-3 ${color}`}
                    >

                        {value}

                    </h2>

                </div>

                <div className={color}>

                    {icon}

                </div>

            </div>

        </div>

    );

}