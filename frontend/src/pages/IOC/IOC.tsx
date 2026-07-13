import { useEffect, useState } from "react";
import { Plus, Search } from "lucide-react";


import { getIOCs } from "../../services/ioc.service";
import type { IOCItem } from "../../services/ioc.service";
import IOCStats from "../../components/cards/IOCStats";
import IOCTable from "../../components/tables/IOCTable";

    export default function IOCPage() {
  const [search, setSearch] = useState("");
const [iocs, setIocs] = useState<IOCItem[]>([]);
  useEffect(() => {
    getIOCs().then(setIocs);
  }, []);

  const filtered = iocs.filter((ioc) =>
    ioc.indicator.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            IOC Management
          </h1>

          <p className="text-gray-400">
            Indicators of Compromise
          </p>

        </div>

        <button className="bg-cyan-500 px-5 py-3 rounded-lg flex gap-2 hover:bg-cyan-600">

          <Plus />

          Import IOC

        </button>

      </div>

      <div className="grid grid-cols-4 gap-6">

        <IOCStats title="Total IOC" value={15422} color="text-cyan-400" />

        <IOCStats title="IPs" value={4541} color="text-green-400" />

        <IOCStats title="Domains" value={2884} color="text-orange-400" />

        <IOCStats title="Hashes" value={7997} color="text-red-400" />

      </div>

      <div className="bg-[#132034] rounded-xl p-5">

        <div className="flex items-center gap-3 mb-5">

          <Search />

          <input
            className="bg-[#0b1627] rounded-lg p-3 w-80 outline-none"
            placeholder="Search IOC..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <IOCTable data={filtered} />

      </div>

    </div>
  );
}