import { create } from "zustand";
import type { Incident } from "../types/incidents";
import { persist } from "zustand/middleware";
import { seedIncidents } from "../data/seeds";

interface incidentState {
      incidents: Incident[];
      addIncident: (incident: Incident) => void;
      confirmIncident: (id: string) => void;
      updateStatus: (id: string, newStatus: Incident["status"]) => void; //ADMIN
}

export const useIncidentStore = create<incidentState>()(
      persist(
            (set) => ({
                  incidents: seedIncidents,
                  addIncident: (incident) =>
                        set((state) => ({
                              incidents: [...state.incidents, incident],
                        })),
                  confirmIncident: (id) => console.log("Confirmando incidencia:", id),

                  updateStatus: (id, newStatus) => console.log("Cambiando estado a:", newStatus),
            }),
            { name: "eco-vigia-storage" },
      ),
);
