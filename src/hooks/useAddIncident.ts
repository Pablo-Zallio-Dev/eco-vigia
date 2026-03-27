import { useModalStore } from "../store/useModalStore";
import { useMap } from "react-leaflet";

export const useAddIncident = () => {

      const map = useMap();
      const getFormAndCoords = useModalStore((state) => state.getFormAndCoords);

      const handleAddClick = () => {
            
            const center = map.getCenter()

            getFormAndCoords({ lat: center.lat, lng: center.lng }, 'button_click')
      };

      return { handleAddClick }
}