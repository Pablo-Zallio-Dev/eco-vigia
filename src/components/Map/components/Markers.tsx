import { Marker, Popup } from "react-leaflet"
import { statusIcons } from "../utilities/MapIcons"

interface MarkerProps {
      lat:number,
      lng: number,
      status: 'Abierta' | 'En proceso' | 'Resuelta',
      description: string,
      confirmations: number
}


const Markers = ({ lat, lng, status, description, confirmations }: MarkerProps) => {
      return (
            <>

                  <Marker  position={[lat, lng]} icon={statusIcons[status]  || statusIcons.alert} >
                        <Popup className=" ">
                              <section className="font-inter ">
                                    <p className=" font-extrabold "> {status} </p>
                                    <p className=" w-48 text-xs "> {description} </p>
                                    <p className=" font-bold text-xxs ">Notificaciones: {confirmations}</p>
                              </section>
                        </Popup>
                  </Marker>

            </>
      )
}

export default Markers