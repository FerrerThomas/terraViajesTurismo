import { TravelPackage } from '../types';

export const travelPackages: TravelPackage[] = [
  {
    id: 1,
    title: 'Oferta Miami',
    destination: 'Miami, USA',
    duration: '07 noches',
    departureDate: '27 de Julio',
    image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      '7 noches en complejo "The Isles"',
      'Pasaje aéreo con Gol Airlines',
      'Asistencia Universal Assistance',
      'Excursion sorpresa'
    ],
    price: 1860,
    currency: 'USD'
  },
  {
    id: 2,
    title: 'Norte con Salinas',
    destination: 'Norte Argentino',
    duration: '05 noches',
    departureDate: '15 de Agosto',
    image: 'https://images.pexels.com/photos/3732494/pexels-photo-3732494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      '5 noches en hotel de categoría',
      'Desayuno incluido',
      'Excursión a Salinas Grandes',
      'Traslados incluidos'
    ],
    price: 890,
    currency: 'USD'
  },
  {
    id: 3,
    title: 'Paraíso en Cancún',
    destination: 'Cancún, México',
    duration: '10 noches',
    departureDate: '05 de Septiembre',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      '10 noches en resort all inclusive',
      'Pasaje aéreo con Aeromexico',
      'Traslados y excursiones',
      'Seguro de viaje premium'
    ],
    price: 2240,
    currency: 'USD'
  },
  {
    id: 4,
    title: 'Tour por Europa',
    destination: 'Europa',
    duration: '15 noches',
    departureDate: '10 de Octubre',
    image: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      '15 noches en hoteles 4 estrellas',
      'Pasaje aéreo con Iberia',
      'Visitas guiadas en París, Roma y Madrid',
      'Traslados y desayunos incluidos'
    ],
    price: 3450,
    currency: 'USD'
  },
  {
    id: 5,
    title: 'Aventura en Bariloche',
    destination: 'Bariloche, Argentina',
    duration: '06 noches',
    departureDate: '20 de Julio',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      '6 noches en cabaña con vista al lago',
      'Excursión Circuito Chico',
      'Pasajes aéreos ida y vuelta',
      'Traslados aeropuerto-hotel'
    ],
    price: 1120,
    currency: 'USD'
  },
  {
    id: 6,
    title: 'Exótico Tailandia',
    destination: 'Bangkok y Phuket',
    duration: '12 noches',
    departureDate: '15 de Noviembre',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      '5 noches en Bangkok, 7 en Phuket',
      'Vuelos internacionales e internos',
      'Excursiones y guías en español',
      'Seguro médico internacional'
    ],
    price: 2980,
    currency: 'USD'
  }
];