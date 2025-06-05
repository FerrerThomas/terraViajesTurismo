import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Bell, Facebook, Twitter, Instagram, Plane } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 py-2 px-4 lg:px-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="mailto:consultas@terraviajes.com.ar" className="flex items-center hover:text-teal-400 transition-colors">
              <Mail size={16} className="mr-1" />
              <span className="hidden sm:inline">consultas@terraviajes.com.ar</span>
            </a>
            <a href="tel:2214720108" className="flex items-center hover:text-teal-400 transition-colors">
              <Phone size={16} className="mr-1" />
              <span>221 - 4720108</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="https://www.instagram.com/terraviajesyturismo/" className="hover:text-teal-400 transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Notifications">
              <Bell size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div 
        className={`${
          isScrolled 
            ? 'bg-gray-900 shadow-md' 
            : 'bg-transparent'
        } transition-all duration-300 py-4 px-4 lg:px-8`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="bg-teal-600 rounded-full p-2 mr-2">
              <Plane size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">Terra Viajes & Turismo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 text-white">
              <li><a href="#" className="hover:text-teal-400 transition-colors font-medium">Inicio</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors font-medium">Paquetes</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors font-medium">Destinos</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors font-medium">Cruceros</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors font-medium">Contacto</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 shadow-xl">
          <nav className="container mx-auto py-4 px-4">
            <ul className="space-y-4 text-white">
              <li><a href="#" className="block py-2 hover:text-teal-400 transition-colors">Inicio</a></li>
              <li><a href="#" className="block py-2 hover:text-teal-400 transition-colors">Paquetes</a></li>
              <li><a href="#" className="block py-2 hover:text-teal-400 transition-colors">Destinos</a></li>
              <li><a href="#" className="block py-2 hover:text-teal-400 transition-colors">Cruceros</a></li>
              <li><a href="#" className="block py-2 hover:text-teal-400 transition-colors">Contacto</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header