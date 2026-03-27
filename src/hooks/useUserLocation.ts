import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useIncidentStore } from "../store/useIncidentStore";

export const useUserLocation = () => {

      const map = useMap();
      const setUserLocation = useIncidentStore((state) => state.setUserLocation);

      useEffect(() => {
            map.locate({ setView: false, enableHighAccuracy: true });

            const onLocationFound = (e: L.LocationEvent) => {
                  setUserLocation([e.latlng.lat, e.latlng.lng]);
                  console.log("✅ Store actualizado con GPS:", [e.latlng.lat, e.latlng.lng]);
                  map.flyTo(e.latlng, 16, {
                        animate: true,
                        duration: 2,
                  });
            };
            const onLocationError = () => {
                  console.warn('Sin ubi')
            }

            map.on("locationfound", onLocationFound);
            map.on("locationerror", onLocationError);

            return () => {
                  map.off("locationfound", onLocationFound);
                  map.off("locationerror", onLocationError);
            };
      }, [map, setUserLocation])
}