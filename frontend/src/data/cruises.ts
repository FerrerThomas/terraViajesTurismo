import { Cruise } from '../types';

export const cruises: Cruise[] = [
  {
    id: 1,
    title: 'Costa Diadema verano 2026',
    description: 'Crucero por el Mediterráneo',
    duration: '09 noches',
    departureDate: '15 de Junio 2026',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      'Salida desde Barcelona',
      'Régimen todo incluido',
      'Visitas a Nápoles, Roma y Marsella',
      'Cabina exterior con balcón'
    ],
    price: 2450,
    currency: 'USD'
  },
  {
    id: 2,
    title: 'Crucero Brasil & Uruguay 2025',
    description: 'Crucero por Sudamérica',
    duration: '07 noches',
    departureDate: '10 de Enero 2025',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      'Salida desde Buenos Aires',
      'Régimen pensión completa',
      'Escalas en Rio de Janeiro y Montevideo',
      'Espectáculos a bordo'
    ],
    price: 1680,
    currency: 'USD'
  },
  {
    id: 3,
    title: 'MSC Caribe Mágico',
    description: 'Crucero por el Caribe',
    duration: '10 noches',
    departureDate: '05 de Marzo 2025',
    image: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: [
      'Salida desde Miami',
      'All inclusive premium',
      'Visitas a Jamaica, Bahamas y Cozumel',
      'Cabina con balcón al mar'
    ],
    price: 2200,
    currency: 'USD'
  },
  {
    id: 4,
    title: 'Road To Titanic',
    description: 'Venia a hundirte con nosotros',
    duration: '08 noches',
    departureDate: '20 de Julio 2025',
    image: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic762774.jpg?w=1600',
    details: [
      'Salida desde casa',
      'Pensión completa',
      'Avistamiento de glaciares',
      'Excursiones incluidas (nadando jaja)'
    ],
    price: 2850,
    currency: 'Bolivares'
  }
];