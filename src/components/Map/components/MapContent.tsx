import { MapContainer, TileLayer } from "react-leaflet"
import { useIncidentStore } from "../../../store/useIncidentStore"
import Markers from "./Markers"
import BtnAdd from "./BtnAdd"
import { useUserLocation } from "../../../hooks/useUserLocation";

// Componente controlador interno
  const MapInit = () => {
    useUserLocation();
    return null;
  };


const MapContent = () => {

      const incidents = useIncidentStore((state) => (state.incidents))





      return (
            <>
                  <MapContainer className=" w-full h-screen bg-amber-500  " center={[39.329677, -0.5237843]} zoom={8} scrollWheelZoom={true}>
                        <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MapInit />

                        <BtnAdd /> {/* ESta aquidentro */}
                        {
                              incidents.map((incident) => (
                                    <Markers key={incident.id} lat={incident.lat} lng={incident.lng} status={incident.status} description={incident.description} confirmations={incident.confirmations} />
                              ))
                        }
                  </MapContainer>
            </>
      )
}

export default MapContent      