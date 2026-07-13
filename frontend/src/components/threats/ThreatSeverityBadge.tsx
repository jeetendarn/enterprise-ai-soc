type Props = {
    severity: string;
};

const colors: Record<string, string> = {
    Critical: "#ef4444",
    High: "#f97316",
    Medium: "#facc15",
    Low: "#22c55e",
};

export default function ThreatSeverityBadge({
    severity,
}: Props) {

    return (

        <span
            style={{
                background: colors[severity],
                color: "#fff",
                padding: "5px 12px",
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 600,
            }}
        >
            {severity}
        </span>

    );

}