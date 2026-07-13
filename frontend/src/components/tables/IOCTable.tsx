import { Eye, Pencil, Trash2 } from "lucide-react";
import IOCSeverityBadge from "../common/IOCSeverityBadge";
import IOCTypeBadge from "../common/IOCTypeBadge";
import IOCConfidenceBadge from "../common/IOCConfidenceBadge";
import type { IOCItem } from "../../services/ioc.service";
interface Props {
  data: IOCItem[];
}


export default function IOCTable({ data }: Props) {
  return (
    <table className="w-full">

      <thead>

        <tr className="border-b border-[#243246]">

          <th className="text-left p-4">Indicator</th>
          <th className="text-left">Type</th>
          <th className="text-left">Severity</th>
          <th className="text-left">Confidence</th>
          <th className="text-left">Source</th>
          <th className="text-left">Status</th>
          <th className="text-left">Last Seen</th>
          <th></th>

        </tr>

      </thead>

      <tbody>

        {data.map((ioc) => (

          <tr
            key={ioc.id}
            className="border-b border-[#1d2a3b] hover:bg-[#16253b]"
          >

            <td className="p-4">{ioc.indicator}</td>

            <td>
              <IOCTypeBadge type={ioc.type} />
            </td>

            <td>
              <IOCSeverityBadge severity={ioc.severity} />
            </td>

            <td>
              <IOCConfidenceBadge confidence={ioc.confidence} />
            </td>

            <td>{ioc.source}</td>

            <td>{ioc.status}</td>

            <td>{ioc.lastSeen}</td>

            <td className="flex gap-3 py-4">

              <Eye size={18} />

              <Pencil size={18} />

              <Trash2 size={18} />

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}