import { Search, Plus, Download } from "lucide-react";

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

export default function ThreatToolbar({
    search,
    setSearch,
}: Props) {

    return (

        <div className="toolbar">

            <div className="toolbar-search">

                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search threats..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="toolbar-buttons">

                <button className="primary-btn">

                    <Plus size={18} />

                    Add Threat

                </button>

                <button className="secondary-btn">

                    <Download size={18} />

                    Export

                </button>

            </div>

        </div>

    );

}