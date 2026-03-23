import { Marker, Popup } from "react-leaflet"
import { statusIcons } from "../utilities/MapIcons"

interface MarkerProps {
      lat:number,
      lng: number,
      status: 'abierta' | 'en-proceso' | 'resuelta'
}


const Markers = ({ lat, lng, status }: MarkerProps) => {
      return (
            <>
                  <Marker position={[lat, lng]} icon={statusIcons[status]  || statusIcons.alert}>
                        <Popup className=" bg-amber-400 ">
                              <section className="">
                                    
                              </section>
                        </Popup>
                  </Marker>
            </>
      )
}

export default Markers