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