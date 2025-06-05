import React from 'react';
import { cruises } from '../data/cruises';
import CruiseCard from './CruiseCard';
import Carousel from './common/Carousel';

const CruiseSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Temporada de Costa Cruceros
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora nuestras mejores ofertas de cruceros con itinerarios exclusivos y experiencias inolvidables
          </p>
        </div>

        <Carousel
          itemsToShow={{ base: 1, sm: 2, md: 3, lg: 4 }}
        >
          {cruises.map((cruise) => (
            <CruiseCard key={cruise.id} cruise={cruise} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CruiseSection;