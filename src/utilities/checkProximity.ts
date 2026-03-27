import type { Incident } from "../types/incidents";

const PROXIMITY_THRESHOLD = 0.0005;

export const checkProximity = (
  currentCoords: { lat: number; lng: number },
  allIncidents: Incident[]
) => {
  return allIncidents.find((incident) => {
    const latDiff = Math.abs(incident.lat - currentCoords.lat);
    const lngDiff = Math.abs(incident.lng - currentCoords.lng);

    // Si ambas distancias son menores al umbral, es un duplicado
    return latDiff < PROXIMITY_THRESHOLD && lngDiff < PROXIMITY_THRESHOLD;
  });
};


const REPORTING_RANGE = 0.002; // ~200 metros

export const isWithinRange = (
  userCoords: [number, number], // Ubicación GPS real
  mapCoords: { lat: number; lng: number } // Centro del mapa (donde está el pin)
) => {
  const latDiff = Math.abs(userCoords[0] - mapCoords.lat);
  const lngDiff = Math.abs(userCoords[1] - mapCoords.lng);

  return latDiff < REPORTING_RANGE && lngDiff < REPORTING_RANGE;
};