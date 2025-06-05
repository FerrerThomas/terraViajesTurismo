export interface TravelPackage {
  id: number;
  title: string;
  destination: string;
  duration: string;
  departureDate: string;
  image: string;
  details: string[];
  price: number;
  currency: string;
}

export interface Cruise {
  id: number;
  title: string;
  description: string;
  duration: string;
  departureDate: string;
  image: string;
  details: string[];
  price: number;
  currency: string;
}