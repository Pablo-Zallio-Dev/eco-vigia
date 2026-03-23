import { MapContainer, TileLayer } from "react-leaflet"
import { useIncidentStore } from "../../../store/useIncidentStore"
import Markers from "./Markers"


const MapContent = () => {

      const incidents = useIncidentStore((state) => (state.incidents))



      return (
            <>
                  <MapContainer className=" w-6xl h-120 bg-amber-500 " center={[39.4106, -0.4885]} zoom={15} scrollWheelZoom={true}>
                        <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {
                              incidents.map((incident) => (
                                    <Markers key={incident.id} lat={incident.lat} lng={incident.lng} status={incident.status} />
                              ))
                        }
                  </MapContainer>
            </>
      )
}

export default MapContent      