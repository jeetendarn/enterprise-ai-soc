import incidents from "../data/incidents.json";

import { Incident } from "../types/incident";

export async function getIncidents():Promise<Incident[]>{

return new Promise(resolve=>{

setTimeout(()=>{

resolve(incidents);

},500);

});

}