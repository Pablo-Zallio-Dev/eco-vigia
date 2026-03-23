import type { Incident } from "../types/incidents";

export const seedIncidents: Incident[] = [
  {
    id: '1',
    title: 'Desprendimiento de rocas',
    description: 'Rocas de gran tamaño bloqueando el paso en el sendero azul.',
    category: 'Peligro',
    status: 'abierta',
    lat: 40.4167,
    lng: -3.7033,
    date: '2026-03-23T09:00:00Z',
    isLocal: false,
    confirmations: 5
  },
  {
    id: '2',
    title: 'Acumulación de plásticos',
    description: 'Restos de un picnic abandonados junto al río.',
    category: 'Limpieza',
    status: 'en-proceso',
    lat: 40.4180,
    lng: -3.7040,
    date: '2026-03-22T15:30:00Z',
    isLocal: false,
    confirmations: 2
  },
  {
    id: '3',
    title: 'Señal de dirección rota',
    description: 'El poste indicador hacia la cima está caído.',
    category: 'Señalización',
    status: 'resuelta',
    lat: 40.4150,
    lng: -3.7020,
    date: '2026-03-21T11:20:00Z',
    isLocal: false,
    confirmations: 10
  }
];