import SeverityBadge from "../cards/SeverityBadge";
import ThreatStatusBadge from "./ThreatStatusBadge";
interface Props {
    total: number;
}

export default function ThreatPagination({
    total,
}: Props) {

    return (

        <div
            className="flex justify-between items-center mt-6"
        >

            <span className="text-gray-400">

                Total Threats: {total}

            </span>

            <div className="flex gap-3">

                <button className="primary-btn">

                    Previous

                </button>

                <button className="primary-btn">

                    Next

                </button>

            </div>

        </div>

    );

}