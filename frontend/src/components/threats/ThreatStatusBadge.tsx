type Props = {
    status: string;
};

const statusColors: Record<string, string> = {
    Open: "#ef4444",
    Investigating: "#f59e0b",
    Resolved: "#22c55e",
    Closed: "#64748b",
};

export default function ThreatStatusBadge({ status }: Props) {
    return (
        <span
            style={{
                background: statusColors[status],
                color: "#fff",
                padding: "5px 12px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 600,
            }}
        >
            {status}
        </span>
    );
}