import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TravelPackage } from '../types';
import Card from './common/Card';

interface PackageCardProps {
  package: TravelPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <Card>
      <div className="relative">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-teal-600 text-white px-3 py-1 rounded-br-lg font-medium text-sm">
          {pkg.destination}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <Clock size={16} className="mr-1" />
          <span>{pkg.duration}</span>
          <span className="mx-2">|</span>
          <Calendar size={16} className="mr-1" />
          <span>salida {pkg.departureDate}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
        
        <ul className="space-y-1 mb-4 text-gray-300 text-sm">
          {pkg.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-teal-500 mr-2">•</span>
              {detail}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-700">
          <div>
            <span className="text-gray-400 text-sm">Desde</span>
            <div className="text-xl font-bold text-white">
              {pkg.currency} {pkg.price.toLocaleString()}
            </div>
          </div>
          <Link 
            to={`/package/${pkg.id}`}
            className="text-teal-500 hover:text-teal-400 font-medium"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;