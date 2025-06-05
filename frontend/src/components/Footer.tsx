import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Terra Viajes & Turismo</h3>
            <p className="mb-4">
              Agencia de viajes especializada en paquetes turísticos y cruceros con más de 15 años de experiencia en el mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Paquetes</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Destinos</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Cruceros</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Destinos populares</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Miami, USA</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Cancún, México</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">París, Francia</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Bariloche, Argentina</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Río de Janeiro, Brasil</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-2 flex-shrink-0 text-teal-500" />
                <span>Av. Corrientes 1234, CABA, Argentina</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-2 flex-shrink-0 text-teal-500" />
                <span>221 - 4720108</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-2 flex-shrink-0 text-teal-500" />
                <span>consultas@terraviajes.com.ar</span>
              </li>
              <li className="flex">
                <Clock size={20} className="mr-2 flex-shrink-0 text-teal-500" />
                <span>Lun-Vie: 9:00 - 18:00, Sáb: 9:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Terra Viajes & Turismo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer