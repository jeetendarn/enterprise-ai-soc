import ThreatCard from "./ThreatCard";

interface Props {
    threats: any[];
}

export default function ThreatSummary({
    threats,
}: Props) {

    const critical = threats.filter(t => t.severity === "Critical").length;
    const high = threats.filter(t => t.severity === "High").length;
    const medium = threats.filter(t => t.severity === "Medium").length;
    const low = threats.filter(t => t.severity === "Low").length;

    return (

        <div className="threat-summary">

            <ThreatCard
                title="Critical"
                count={critical}
                color="#ef4444"
            />

            <ThreatCard
                title="High"
                count={high}
                color="#f97316"
            />

            <ThreatCard
                title="Medium"
                count={medium}
                color="#eab308"
            />

            <ThreatCard
                title="Low"
                count={low}
                color="#22c55e"
            />

        </div>

    );

}