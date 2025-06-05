import React from 'react';
import { travelPackages } from '../data/packages';
import PackageCard from './PackageCard';
import Carousel from './common/Carousel';

const PackageSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Viajá en vacaciones de invierno
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre nuestros mejores paquetes de viaje con ofertas exclusivas para tus próximas vacaciones
          </p>
        </div>

        <Carousel
          itemsToShow={{ base: 1, sm: 2, md: 3, lg: 3 }}
          className="mb-10"
        >
          {travelPackages.slice(0, 3).map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </Carousel>

        <Carousel
          itemsToShow={{ base: 1, sm: 2, md: 3, lg: 3 }}
        >
          {travelPackages.slice(3).map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PackageSection;