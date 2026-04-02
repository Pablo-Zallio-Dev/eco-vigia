import { supabase } from "../../../lib/supabase";
import { useIncidentStore } from "../../../store/useIncidentStore";
import { useModalStore } from "../../../store/useModalStore";
import type { Incident } from "../../../types/incidents";
import type { Inputs } from "../../../types/inputs";

export const useSendForm = () => {
      const { coords, closeForm } = useModalStore();
      const addIncident = useIncidentStore((state) => state.addIncident);

      const onSubmit = async( data: Inputs, reset?: () => void) => {
            if (!coords) return;

            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                  console.error("No hay un usuario autenticado");
                  return;
            }

            
            const newIncident: Incident = {
                  id: crypto.randomUUID(), // Genera ID único
                  user_id: user.id,
                  title: data.title,
                  description: data.description,
                  category: data.category,
                  status: 'Abierta',
                  lat: coords.lat, // Usamos las coords donde el usuario hizo clic
                  lng: coords.lng,
                  date: new Date().toISOString(),
                  confirmations: 0,
                  isLocal: true,
            };

            addIncident(newIncident);
            closeForm();
           if (reset) reset();
            
            
      }

      return { onSubmit }
}

