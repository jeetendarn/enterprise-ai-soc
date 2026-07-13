import threats from "../data/threats.json";

import type { Threat } from "../types/threat";

export async function getThreats(): Promise<Threat[]> {

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve(threats);

        },500);

    });

}