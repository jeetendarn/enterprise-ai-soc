const feeds=[

"Malware detected on Endpoint-14",

"Brute Force attack blocked",

"New IOC imported",

"Firewall policy updated",

"Suspicious login detected",

];

export default function ThreatFeed(){

return(

<div className="feed-card">

<h3>

Live Threat Feed

</h3>

{

feeds.map((item)=>

<div
key={item}
className="feed-item"
>

🟢 {item}

</div>

)

}

</div>

);

}