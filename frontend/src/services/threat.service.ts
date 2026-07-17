import api from "../api/axios";

export interface Threat {
    id: number;
    name: string;
    description: string;
    threat_type: string;
    severity: string;
    confidence: number;
    ioc_value: string;
    source: string;
    status: string;
}

export const ThreatService = {

    async getAll(): Promise<Threat[]> {

        const res = await api.get("/threats");

        return res.data.threats;

    },

};