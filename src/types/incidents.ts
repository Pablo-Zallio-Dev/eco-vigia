export interface Incident {
      id: string,
      title: string,
      description: string,
      category: 'Senderos' | 'Limpieza' | 'Señalización' | 'Peligro';
      status: 'abierta' | 'en-proceso' | 'resuelta';
      lat: number,
      lng: number,
      date: string,
      isLocal: boolean,
      confirmations: number,
}