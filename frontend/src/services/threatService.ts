import api from "../api/axios";
import { API } from "../api/endpoints";

export interface Threat {
  id: number;
  title: string;
  severity: string;
  source: string;
  status: string;
  confidence: number;
  created_at: string;
}

export const ThreatService = {
  async getAll() {
    const res = await api.get(API.threats);
    return res.data.threats ?? [];
  },

  async create(data: Partial<Threat>) {
    const res = await api.post(API.threats, data);
    return res.data;
  },

  async update(id: number, data: Partial<Threat>) {
    const res = await api.put(`${API.threats}/${id}`, data);
    return res.data;
  },

  async delete(id: number) {
    return api.delete(`${API.threats}/${id}`);
  },
};