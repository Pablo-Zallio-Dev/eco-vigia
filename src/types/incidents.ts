/**
 * Estructura de tipos para las incidencias.
 */
export interface Incident {
      id: string,
      title: string,
      description: string,
      category: 'Senderos' | 'Limpieza' | 'Señalización' | 'Peligro';
      status: 'Abierta' | 'En proceso' | 'Resuelta';
      lat: number,
      lng: number,
      date: string,
      isLocal: boolean,
      confirmations: number,
}