export default function ThreatFilters() {

    return (

        <div className="threat-filters">

            <select>
                <option>All Severity</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>

            <select>
                <option>All Status</option>
                <option>Open</option>
                <option>Investigating</option>
                <option>Resolved</option>
                <option>Closed</option>
            </select>

            <select>
                <option>All Sources</option>
                <option>Wazuh</option>
                <option>Suricata</option>
                <option>CrowdStrike</option>
                <option>Microsoft Defender</option>
            </select>

            <select>
                <option>MITRE ATT&CK</option>
                <option>T1059</option>
                <option>T1486</option>
                <option>T1110</option>
                <option>T1566</option>
            </select>

        </div>

    );

}