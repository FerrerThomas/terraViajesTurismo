import React, { useState } from 'react';
import { Search, Map, Calendar, Users } from 'lucide-react';
import Button from './common/Button';

const Hero: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search params:', searchParams);
    // Here you would handle the search functionality
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundPosition: 'center 20%'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 w-full max-w-6xl">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Descubre el mundo con nosotros
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Encuentra los mejores paquetes de viaje y cruceros para tus próximas vacaciones
            </p>
          </div>

          {/* Search Form */}
          <div className="w-full max-w-4xl bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="origin" className="block text-sm font-medium text-gray-200">
                    ¿Dónde origen?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Map size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="origin"
                      name="origin"
                      value={searchParams.origin}
                      onChange={handleChange}
                      placeholder="Ciudad de origen"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-200">
                    ¿Dónde destino?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Map size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={searchParams.destination}
                      onChange={handleChange}
                      placeholder="Ciudad de destino"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="departureDate" className="block text-sm font-medium text-gray-200">
                    Ida
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={searchParams.departureDate}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-200">
                    Vuelta
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={searchParams.returnDate}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="passengers" className="block text-sm font-medium text-gray-200">
                    ¿Cuántos viajan?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users size={18} className="text-gray-400" />
                    </div>
                    <select
                      id="passengers"
                      name="passengers"
                      value={searchParams.passengers}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} Pasajero{num !== 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Search size={20} className="mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;