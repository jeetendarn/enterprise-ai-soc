import { Search, Plus, Download } from "lucide-react";

export default function ThreatToolbar() {
    return (
        <div className="toolbar">

            <div className="toolbar-search">

                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search threats..."
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