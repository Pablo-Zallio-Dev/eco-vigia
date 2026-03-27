import type { Incident } from "../types/incidents";


export const seedIncidents: Incident[] = [
  {
    id: '1',
    title: 'Desprendimiento de rocas',
    description: 'Rocas de gran tamaño bloqueando el paso en el sendero azul.',
    category: 'Peligro',
    status: 'Abierta',
    lat: 39.329677,
    lng: -0.5237843,
    date: '2026-03-23T09:00:00Z',
    isLocal: false,
    confirmations: 5
  },
  {
    id: '2',
    title: 'Acumulación de plásticos',
    description: 'Restos de un picnic abandonados junto al río.',
    category: 'Limpieza',
    status: 'En proceso',
    lat: 39.329600,
    lng: -0.5276843,
    date: '2026-03-22T15:30:00Z',
    isLocal: false,
    confirmations: 2
  },
  {
    id: '3',
    title: 'Señal de dirección rota',
    description: 'El poste indicador hacia la cima está caído.',
    category: 'Señalización',
    status: 'Resuelta',
    lat: 39.342255,
    lng: -0.5236961,
    date: '2026-03-21T11:20:00Z',
    isLocal: false,
    confirmations: 10
  },
  {
    id: '4',
    title: 'Señal de dirección rota',
    description: 'El poste indicador hacia la cima está caído.',
    category: 'Señalización',
    status: 'Resuelta',
    lat: 39.322344,
    lng: -0.5238261,
    date: '2026-03-21T11:20:00Z',
    isLocal: false,
    confirmations: 10
  }
];