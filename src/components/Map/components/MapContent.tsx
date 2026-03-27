import { MapContainer, TileLayer } from "react-leaflet";
import { useIncidentStore } from "../../../store/useIncidentStore";
import Markers from "./Markers";
import BtnAdd from "./BtnAdd";
import { useUserLocation } from "../../../hooks/useUserLocation";
import BtnRecenter from "../../NavBar/components/BtnRecenter";

// Componente controlador interno
const MapInit = () => {
  useUserLocation();
  return null;
};

const MapContent = () => {
  const incidents = useIncidentStore((state) => state.incidents);

  return (
    <>
      <MapContainer
        className=" w-full h-dvh bg-amber-500 relative "
        center={[39.1847558, -0.6223629]}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapInit />
        <BtnRecenter />
        <BtnAdd /> {/* ESta aquidentro */}
        {incidents.map((incident) => (
          <Markers
            key={incident.id}
            lat={incident.lat}
            lng={incident.lng}
            title={incident.title}
            status={incident.status}
            description={incident.description}
            confirmations={incident.confirmations}
          />
        ))}
      </MapContainer>
    </>
  );
};

export default MapContent;
