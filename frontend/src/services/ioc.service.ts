export interface IOCItem {
  id: number;
  indicator: string;
  type: string;
  severity: string;
  confidence: number;
  source: string;
  status: string;
  firstSeen: string;
  lastSeen: string;
}

const iocs: IOCItem[] = [
  {
    id: 1,
    indicator: "185.220.101.45",
    type: "IP",
    severity: "Critical",
    confidence: 98,
    source: "AlienVault",
    status: "Active",
    firstSeen: "Today",
    lastSeen: "5 mins ago",
  },
  {
    id: 2,
    indicator: "evil-domain.xyz",
    type: "Domain",
    severity: "High",
    confidence: 92,
    source: "VirusTotal",
    status: "Active",
    firstSeen: "Yesterday",
    lastSeen: "12 mins ago",
  },
  {
    id: 3,
    indicator: "8f14e45fceea167a5a36dedd4bea2543",
    type: "MD5",
    severity: "Critical",
    confidence: 99,
    source: "MISP",
    status: "Blocked",
    firstSeen: "Today",
    lastSeen: "2 mins ago",
  },
  {
    id: 4,
    indicator: "http://malicious-update.cc",
    type: "URL",
    severity: "Medium",
    confidence: 71,
    source: "AbuseIPDB",
    status: "Monitoring",
    firstSeen: "Today",
    lastSeen: "30 mins ago",
  },
];

export async function getIOCs() {
  return Promise.resolve(iocs);
}