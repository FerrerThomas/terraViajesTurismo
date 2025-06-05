import React from 'react';
import { Calendar, Clock, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Cruise } from '../types';
import Card from './common/Card';

interface CruiseCardProps {
  cruise: Cruise;
}

const CruiseCard: React.FC<CruiseCardProps> = ({ cruise }) => {
  return (
    <Card>
      <div className="relative">
        <img 
          src={cruise.image} 
          alt={cruise.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg font-medium text-sm flex items-center">
          <Anchor size={14} className="mr-1" />
          Crucero
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <Clock size={16} className="mr-1" />
          <span>{cruise.duration}</span>
          <span className="mx-2">|</span>
          <Calendar size={16} className="mr-1" />
          <span>salida {cruise.departureDate}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">{cruise.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{cruise.description}</p>
        
        <ul className="space-y-1 mb-4 text-gray-300 text-sm">
          {cruise.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {detail}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-700">
          <div>
            <span className="text-gray-400 text-sm">Desde</span>
            <div className="text-xl font-bold text-white">
              {cruise.currency} {cruise.price.toLocaleString()}
            </div>
          </div>
          <Link 
            to={`/cruise/${cruise.id}`}
            className="text-blue-500 hover:text-blue-400 font-medium"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CruiseCard;