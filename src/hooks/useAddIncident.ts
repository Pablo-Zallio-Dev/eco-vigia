import { useModalStore } from "../store/useModalStore";
import { useIncidentStore } from "../store/useIncidentStore";
import { useMap } from "react-leaflet";
import { checkProximity, isWithinRange } from "../utilities/checkProximity";

export const useAddIncident = () => {
      const map = useMap();
      const getFormAndCoords = useModalStore((state) => state.getFormAndCoords);
      const listIncident = useIncidentStore((state) => state.incidents)
      const setSuggestedIncident = useModalStore((state) => state.setSuggestedIncident)

      const handleAddClick = () => {
            const center = map.getCenter()
            const coords = { lat: center.lat, lng: center.lng };
            const userLocation = useIncidentStore.getState().userLocation; // Tu posición GPS
            const duplicate = checkProximity(coords, listIncident);

            if (userLocation) {
                  const isInRange = isWithinRange(userLocation, coords);

                  if (!isInRange) {
                        alert("⚠️ Estás intentando reportar demasiado lejos de tu ubicación actual.");
                        return; // Detenemos la ejecución aquí
                  }
            }
            if (duplicate) {
                  console.log("Ya hay reporte aqui")
                  setSuggestedIncident(duplicate);
                  getFormAndCoords(coords, 'button_click')

            } else {
                  setSuggestedIncident(null);
                  getFormAndCoords(coords, 'button_click')
            }
      };

      return { handleAddClick }
}

