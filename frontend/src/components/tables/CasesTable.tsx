import {
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

import StatusBadge from "../common/StatusBadge";
import SeverityBadge from "../common/SeverityBadge";

import type { Case } from "../../services/case.service";

interface Props {

    data: Case[];

}

export default function CasesTable({

    data,

}: Props) {

    return (

        <table className="w-full">

            <thead
                className="
                bg-[#1b2b43]
                text-cyan-400
                uppercase
                text-sm
                "
            >

                <tr>

                    <th className="px-6 py-4 text-left">ID</th>

                    <th className="px-6 py-4 text-left">Title</th>

                    <th className="px-6 py-4 text-left">Priority</th>

                    <th className="px-6 py-4 text-left">Status</th>

                    <th className="px-6 py-4 text-left">Analyst</th>

                    <th className="px-6 py-4 text-left">Incident</th>

                    <th className="px-6 py-4 text-left">Due Date</th>

                    <th className="px-6 py-4 text-center">
                        Actions
                    </th>

                </tr>

            </thead>

            <tbody>

                {

                    data.map((item) => (

                        <tr

                            key={item.id}

                            className="
                            border-b
                            border-[#243246]
                            hover:bg-[#20324d]
                            transition
                            "

                        >

                            <td className="px-6 py-5">

                                #{item.id}

                            </td>

                            <td className="px-6 py-5 font-semibold">

                                {item.title}

                            </td>

                            <td className="px-6 py-5">

                                <SeverityBadge
                                    value={item.priority}
                                />

                            </td>

                            <td className="px-6 py-5">

                                <StatusBadge
                                    value={item.status}
                                />

                            </td>

                            <td className="px-6 py-5">

                                {item.analyst}

                            </td>

                            <td className="px-6 py-5">

                                {item.incident}

                            </td>

                            <td className="px-6 py-5">

                                {item.dueDate}

                            </td>

                            <td className="px-6 py-5">

                                <div className="flex justify-center gap-5">

                                    <Eye
                                        size={19}
                                        className="cursor-pointer text-cyan-400 hover:text-white"
                                    />

                                    <Pencil
                                        size={19}
                                        className="cursor-pointer text-yellow-400 hover:text-white"
                                    />

                                    <Trash2
                                        size={19}
                                        className="cursor-pointer text-red-500 hover:text-white"
                                    />

                                </div>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}