import { Marker, Popup } from "react-leaflet"
import { statusIcons } from "../utilities/MapIcons"
import { useAuth } from "../../../hooks/useAuth"
import { useModalStore } from "../../../store/useModalStore"

interface MarkerProps {
      id: string,
      user_id: string,
      lat: number,
      lng: number,
      title?: string,
      status: 'Abierta' | 'En proceso' | 'Resuelta',
      description?: string,
      confirmations?: number
}


const Markers = ({ id, user_id, lat, lng, status, title, description, confirmations }: MarkerProps) => {
      console.log(confirmations)

      const { user } = useAuth();
const openDeleteModal = useModalStore((state) => state.openDeleteModal);
     

      return (


            <Marker position={[lat, lng]} icon={statusIcons[status] || statusIcons.alert} >
                  <Popup className=" ">
                        <section className="font-inter ">
                              <p className=" font-extrabold "> {status} </p>
                              <p className=""> {title} </p>
                              <p className=" w-48 text-xs "> {description} </p>
                                    {
                                          confirmations && <p className=" font-bold text-xxs ">Notificaciones: {confirmations}</p>
                                    }
                                    
                                    {user && user.id === user_id && (
                                          <button className=" flex flex-col items-center cursor-pointer " onClick={() => openDeleteModal(id)} >
                                                <p className=" text-xxs text-red-600  ">Borrar Incidencia</p>

                                          </button>
                                    )}
                        </section>
                  </Popup>
            </Marker>


      )
}

export default Markers