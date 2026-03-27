import { create } from "zustand";
import type { Incident } from "../types/incidents";
import { persist } from "zustand/middleware";

interface incidentState {
      incidents: Incident[];
      addIncident: (incident: Incident) => void;
      confirmIncident: (id: string) => void;
      userLocation: [number, number] | null;
      setUserLocation: (coords: [number, number]) => void;
      updateStatus: (id: string, newStatus: Incident["status"]) => void; //ADMIN
}

export const useIncidentStore = create<incidentState>()(
      persist(
            (set) => ({
                  incidents: [],

                  addIncident: (incident) =>
                        set((state) => ({
                              incidents: [...state.incidents, incident],
                        })),

                  setUserLocation: (coords: [number, number]) => set({ userLocation: coords }),     

                  confirmIncident: (id) => set((state) => ({
                        incidents: state.incidents.map((inc) => (
                              inc.id === id ? { ...inc, confirmations: (inc.confirmations || 0) + 1 } : inc
                        ))
                  })),

                  updateStatus: (id, newStatus) => set((state) => ({
                        incidents: state.incidents.map((inc) => (
                             inc.id === id ? { ...inc, status: newStatus } : inc
                        ))
                  })),

                  userLocation: null,
            }),
            { name: "eco-vigia-storage" },
      ),
);
