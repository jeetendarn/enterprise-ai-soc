import { useState } from "react";
import {
  ShieldAlert,
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Clock,
  Filter,
} from "lucide-react";

type Incident = {
  id: number;
  title: string;
  severity: string;
  status: string;
  source: string;
  assignee: string;
  created: string;
};

export default function Incidents() {
  const [search, setSearch] = useState("");

  const incidents: Incident[] = [
    {
      id: 1,
      title: "Ransomware detected",
      severity: "Critical",
      status: "Open",
      source: "EDR",
      assignee: "John",
      created: "10 mins ago",
    },
    {
      id: 2,
      title: "Suspicious PowerShell",
      severity: "High",
      status: "Investigating",
      source: "SIEM",
      assignee: "Alice",
      created: "25 mins ago",
    },
    {
      id: 3,
      title: "Failed login spike",
      severity: "Medium",
      status: "Closed",
      source: "AD",
      assignee: "David",
      created: "1 hour ago",
    },
    {
      id: 4,
      title: "SQL Injection Attempt",
      severity: "High",
      status: "Open",
      source: "WAF",
      assignee: "Sophia",
      created: "2 hours ago",
    },
  ];

  const filtered = incidents.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-cyan-400">
            Incident Management
          </h1>

          <p className="text-gray-400 mt-1">
            Monitor, investigate and resolve security incidents.
          </p>

        </div>

        <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-lg font-semibold text-black">

          <Plus size={18} />

          Create Incident

        </button>

      </div>

      {/* Search */}

      <div className="flex justify-between">

        <div className="relative w-96">

          <Search
            className="absolute left-3 top-3 text-gray-500"
            size={18}
          />

          <input
            placeholder="Search incidents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#101826] border border-[#1f2937] rounded-lg pl-10 py-2 text-white"
          />

        </div>

        <button className="flex items-center gap-2 bg-[#162033] px-4 rounded-lg border border-[#263245]">

          <Filter size={18} />

          Filters

        </button>

      </div>

      {/* Incident Table */}

      <div className="bg-[#101826] rounded-xl border border-[#1f2937] overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#151f2d] text-gray-400">

            <tr>

              <th className="p-4 text-left">Title</th>

              <th>Severity</th>

              <th>Status</th>

              <th>Source</th>

              <th>Assignee</th>

              <th>Created</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((incident) => (

              <tr
                key={incident.id}
                className="border-t border-[#1f2937] hover:bg-[#172234]"
              >

                <td className="p-4 flex items-center gap-3">

                  <ShieldAlert
                    className="text-red-400"
                    size={18}
                  />

                  {incident.title}

                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      incident.severity === "Critical"
                        ? "bg-red-600"
                        : incident.severity === "High"
                        ? "bg-orange-500"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {incident.severity}
                  </span>

                </td>

                <td>{incident.status}</td>

                <td>{incident.source}</td>

                <td>{incident.assignee}</td>

                <td>

                  <div className="flex items-center gap-2">

                    <Clock size={14} />

                    {incident.created}

                  </div>

                </td>

                <td>

                  <div className="flex gap-4 justify-center">

                    <Eye
                      size={18}
                      className="cursor-pointer text-cyan-400"
                    />

                    <Pencil
                      size={18}
                      className="cursor-pointer text-yellow-400"
                    />

                    <Trash2
                      size={18}
                      className="cursor-pointer text-red-500"
                    />

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}