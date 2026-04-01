import { create } from "zustand";
import type { Incident } from "../types/incidents";
import { supabase } from "../lib/supabase";

interface incidentState {
      incidents: Incident[];
      setIncidents: (incidents: Incident[]) => void;
      addIncident: (incident: Incident) => Promise<void>;
      confirmIncident: (id: string) => void;
      userLocation: [number, number] | null;
      setUserLocation: (coords: [number, number]) => void;
      updateStatus: (id: string, newStatus: Incident["status"]) => void; //ADMIN
      deleteIncident: (id: string) => void
}

export const useIncidentStore = create<incidentState>((set) => ({
      incidents: [],
      setIncidents: (incidents) => set({ incidents }),

      addIncident: async (incident) => {
            const { data, error } = await supabase
                  .from('Incidentes')
                  .insert([
                        {
                              title: incident.title,
                              description: incident.description,
                              lat: incident.lat,
                              lng: incident.lng,
                              status: 'Abierta'
                              // No hace falta poner user_id, ¡Supabase lo pone solo con auth.uid()!
                        }
                  ])
                        .select();
            if (error) console.error("Error al guardar:", error.message);

            if (data && data.length > 0) {
    set((state) => ({
      incidents: [...state.incidents, data[0] as Incident]
    }));
  }
      },


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
      deleteIncident: async (id) => {
            await supabase.from('Incidentes').delete().eq('id', id);
      },
})

);
