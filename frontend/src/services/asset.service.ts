import api from "../api/axios";
import { API } from "../api/endpoints";

export interface Asset {
    id: number;
    hostname: string;
    ip: string;
    os: string;
    owner: string;
    criticality: string;
    status: string;
    risk: number;
    last_seen: string;
}

export const AssetService = {

    async getAll() {
        const res = await api.get(API.assets);
        return res.data;
    },

    async create(data: Partial<Asset>) {
        const res = await api.post(API.assets, data);
        return res.data;
    },

    async update(id: number, data: Partial<Asset>) {
        const res = await api.put(`${API.assets}/${id}`, data);
        return res.data;
    },

    async delete(id: number) {
        const res = await api.delete(`${API.assets}/${id}`);
        return res.data;
    }

};