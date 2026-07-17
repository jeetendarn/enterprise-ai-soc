import SeverityBadge from "../cards/SeverityBadge";
import ThreatStatusBadge from "./ThreatStatusBadge";

interface Threat {
    id: number;
    name: string;
    severity: string;
    source: string;
    status: string;
    threat_type: string;
    confidence: number;
    ioc_value: string;
}

interface Props {
    threats: Threat[];
}

export default function ThreatTable({ threats }: Props) {

    if (!threats || threats.length === 0) {
        return (
            <div className="table-card">
                <h3>No threats found.</h3>
            </div>
        );
    }

    return (
        <div className="table-card">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Severity</th>
                        <th>Type</th>
                        <th>IOC</th>
                        <th>Confidence</th>
                        <th>Source</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {threats.map((threat) => (
                        <tr key={threat.id}>
                            <td>{threat.id}</td>
                            <td>{threat.name}</td>
                            <td>
                                <SeverityBadge severity={threat.severity} />
                            </td>
                            <td>{threat.threat_type}</td>
                            <td>{threat.ioc_value}</td>
                            <td>{threat.confidence}%</td>
                            <td>{threat.source}</td>
                            <td>
                                <ThreatStatusBadge status={threat.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}