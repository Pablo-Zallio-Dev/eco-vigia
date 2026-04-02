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
            console.log("Intentando borrar el ID:", id);

            const { error, count } = await supabase
                  .from('Incidentes')
                  .delete({ count: 'exact' }) // Nos dirá cuántas filas se borraron
                  .eq('id', id);

            if (error) {
                  console.error("❌ Error de Supabase al borrar:", error.message);
                  return;
            }

            if (count === 0) {
                  console.warn("⚠️ No se borró nada. Probablemente no eres el dueño o el ID no existe.");
                  return;
            }

            // Si llegamos aquí, Supabase confirmó el borrado, ahora actualizamos el mapa
            console.log("✅ Borrado con éxito de la DB. Actualizando estado local...");
            set((state) => ({
                  incidents: state.incidents.filter((inc) => inc.id !== id)
            }));
      },
})

);
