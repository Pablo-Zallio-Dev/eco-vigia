import { useMap } from "react-leaflet";
import { useIncidentStore } from "../../../store/useIncidentStore";
import { Locate } from "lucide-react";

const BtnRecenter = () => {

      const map = useMap();
      const userLocation = useIncidentStore((state) => state.userLocation);

      const handleRecenter = () => {
            if (userLocation) {
                  // Volamos a la ubicación del Store [lat, lng]
                  map.flyTo(userLocation, 18, {
                        animate: true,
                        duration: 1.5,
                  });
            } else {
                  alert("No hay señal de GPS para centrar.");
            }
      };
      return (
           <button
      onClick={handleRecenter}
      className="absolute bottom-24 right-4 z-1000 p-3 bg-white text-primary rounded-full shadow-lg active:scale-95 transition-transform"
      title="Volver a mi ubicación"
    >
      <Locate size={20} fill="currentColor" />
    </button>
      )
}

export default BtnRecenter