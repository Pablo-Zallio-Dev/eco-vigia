import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const useUserLocation = () => {

      const map = useMap();

      useEffect(() => {
            map.locate({ setView: false, enableHighAccuracy: true });

            const onLocationFound = (e: L.LocationEvent) => {
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
      }, [map])
}