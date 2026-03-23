import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"


const Map = () => {
      return (
            <>
                  <h1>Mapa</h1>
                  <MapContainer className="w-full h-screen " center={[39.4106, -0.4885]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[39.4106, -0.4885]}>
                              <Popup className=" bg-amber-400 ">
                                    A pretty CSS3 popup. <br /> Easily customizable.
                              </Popup>
                        </Marker>
                  </MapContainer>
            </>
      )
}

export default Map      