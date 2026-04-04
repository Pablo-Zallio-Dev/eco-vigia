import { useState, useEffect } from 'react';

export const useLocationWatcher = () => {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Tu navegador no soporta geolocalización.");
      return;
    }

    // watchPosition mantiene la ubicación actualizada automáticamente
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError("Es obligatorio activar el GPS para usar EcoVigia.");
            break;
          case err.POSITION_UNAVAILABLE:
            setError("La señal de GPS no está disponible.");
            break;
          case err.TIMEOUT:
            setError("Tiempo de espera agotado al obtener la ubicación.");
            break;
        }
      },
      {
        enableHighAccuracy: true, // Usa el GPS real, no solo WiFi
        timeout: 10000,
        maximumAge: 0,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { coords, error };
};