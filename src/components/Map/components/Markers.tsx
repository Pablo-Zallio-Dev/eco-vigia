import { Marker, Popup } from "react-leaflet"
import { statusIcons } from "../utilities/MapIcons"
import { Trash } from "lucide-react"
import { useIncidentStore } from "../../../store/useIncidentStore"

interface MarkerProps {
      id: string,
      lat: number,
      lng: number,
      title?: string,
      status: 'Abierta' | 'En proceso' | 'Resuelta',
      description?: string,
      confirmations?: number
}


const Markers = ({ id, lat, lng, status, title, description, confirmations }: MarkerProps) => {

      const deleteIncident = useIncidentStore((state) => state.deleteIncident)




      return (
            <>

                  <Marker position={[lat, lng]} icon={statusIcons[status] || statusIcons.alert} >
                        <Popup className=" ">
                              <section className="font-inter ">
                                    <p className=" font-extrabold "> {status} </p>
                                    <p className=""> {title} </p>
                                    <p className=" w-48 text-xs "> {description} </p>
                                    <section className=" flex items-center justify-around ">
                                          <p className=" font-bold text-xxs ">Notificaciones: {confirmations}</p>
                                          <button className=" flex flex-col items-center " onClick={() => deleteIncident(id)} >
                                                <Trash size={20} color="#ff0000" />
                                                <p className=" text-xxs my-1!  ">Borrar</p>
                                          </button>
                                    </section>
                              </section>
                        </Popup>
                  </Marker>

            </>
      )
}

export default Markers