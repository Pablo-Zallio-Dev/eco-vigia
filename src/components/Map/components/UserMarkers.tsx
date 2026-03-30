import { Marker } from "react-leaflet";
import { useIncidentStore } from "../../../store/useIncidentStore"
import L from "leaflet";
import iconHiking from '../../../assets/icon/iconHiking.png'


const UserMarkers = () => {

      const userIcon = new L.Icon({
  iconUrl: `${iconHiking}`,
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [35, 35],
  iconAnchor: [12, 41],
  popupAnchor: [10, -54],
  shadowSize: [40, 40]
});

      const userLocation = useIncidentStore((state) => state.userLocation)

    

      if (!userLocation) return null;

      return (
            <Marker position={userLocation} icon={userIcon}>
                 
            </Marker>
      )
}

export default UserMarkers