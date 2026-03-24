import L from 'leaflet';
import markerAlert from '../../../assets/icon/iconMarkerAlert.svg'
import markerProcess from '../../../assets/icon/iconMarkerProcess.svg'
import markerResolved from '../../../assets/icon/iconMarkerResolved.svg'
import shadowImg from 'leaflet/dist/images/marker-shadow.png';

const iconConfig = {
    shadowUrl: shadowImg,
    iconSize: [32, 32] as [number, number],      // Tamaño del icono
    shadowSize: [50, 31] as [number, number], // size of the shadow
    iconAnchor: [16, 32] as [number, number],    // Punto que toca la coordenada (mitad ancho, alto total)
    popupAnchor: [0, -32] as [number, number],   // Dónde aparece el bocadillo de texto
};

const iconAlert = new L.Icon({
      ...iconConfig,
      iconUrl: markerAlert
})

const iconProcess = new L.Icon({
      ...iconConfig,
      iconUrl: markerProcess
})

const iconResolved = new L.Icon({
      ...iconConfig,
      iconUrl: markerResolved
})

export const statusIcons: Record<string, L.Icon> = {
    'Abierta': iconAlert,
    'En proceso': iconProcess,
    'Resuelta': iconResolved,
};