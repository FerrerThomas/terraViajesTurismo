import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, ArrowLeft, MapIcon as WhatsappIcon, Anchor } from 'lucide-react';
import { cruises } from '../data/cruises';
import Button from '../components/common/Button';

type TabType = 'includes' | 'rates' | 'departure';

const CruiseDetailPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<TabType>('includes');

  const cruiseData = cruises.find(cruise => cruise.id === Number(id));

  if (!cruiseData) {
    return <div className="text-white text-center py-20">Cruise not found</div>;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: cruiseData.title,
        text: `Check out this amazing cruise: ${cruiseData.title}`,
        url: window.location.href,
      });
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`¡Mira este crucero! ${cruiseData.title} - ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    // CAMBIO 1: Fondo general de la página a un azul oscuro (ej. gray-900)
    // El header y el footer probablemente ya son oscuros, esto unifica el fondo
    <main className="py-24 px-4 bg-gray-900 min-h-screen">
      {/* CAMBIO 2: Fondo de la tarjeta principal al mismo color azul oscuro */}
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700"> {/* Añadí un borde sutil para definir la tarjeta */}
        {/* Navigation - CAMBIO 3: Fondo a un gris oscuro y texto claro */}
        <div className="bg-gray-800 px-6 py-4 flex justify-between items-center border-b border-gray-700">
          <Link
            to="/"
            className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>Volver al inicio</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Compartir:</span>
            <button
              onClick={handleWhatsAppShare}
              className="text-gray-300 hover:text-green-400 transition-colors" // CAMBIO: Hover a verde más claro
              aria-label="Compartir por WhatsApp"
            >
              <WhatsappIcon size={20} />
            </button>
            <button
              onClick={handleShare}
              className="text-gray-300 hover:text-blue-400 transition-colors" // CAMBIO: Hover a azul más claro
              aria-label="Compartir"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Cruise Details */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <img
              src={cruiseData.image}
              alt={cruiseData.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          {/* CAMBIO 4: Fondo de la sección de detalles a un gris un poco más claro que el principal y todos los textos en blanco/gris claro */}
          <div className="lg:w-1/3 p-6 bg-gray-800">
            <div className="flex items-center mb-2">
              <Anchor size={20} className="text-teal-400 mr-2" /> {/* CAMBIO: Ícono a teal claro */}
              <span className="text-teal-400 font-medium">Crucero</span> {/* CAMBIO: Texto a teal claro */}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{cruiseData.title}</h1> {/* CAMBIO: Título a blanco */}
            <p className="text-gray-300 mb-4">{cruiseData.description}</p> {/* CAMBIO: Descripción a gris claro */}
            <div className="mb-4">
              <span className="text-gray-300 text-sm">Desde</span> {/* CAMBIO: Texto a gris claro */}
              <div className="text-3xl font-bold text-white"> {/* CAMBIO: Precio a blanco */}
                {cruiseData.currency} {cruiseData.price.toLocaleString()}
              </div>
            </div>
            <div className="mb-6">
              <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded"> {/* CAMBIO: Etiqueta SALIDA a fondo azul más oscuro y texto blanco */}
                SALIDA {cruiseData.departureDate.toUpperCase()}
              </span>
            </div>
            <Button variant="primary" size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white"> {/* CAMBIO: Botón a teal oscuro y texto blanco */}
              Consultar
            </Button>
          </div>
        </div>

        {/* Tabs - CAMBIO 5: Bordes y textos de las pestañas a tonos de gris/azul para que resalten sobre oscuro */}
        <div className="border-b border-gray-700">
          <div className="flex">
            {['includes', 'rates', 'departure'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-teal-500 text-teal-400' // CAMBIO: Pestaña activa a teal
                    : 'text-gray-400 hover:text-gray-200' // CAMBIO: Pestaña inactiva a gris medio, hover a gris claro
                }`}
                onClick={() => setActiveTab(tab as TabType)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - CAMBIO 6: Textos a gris claro o blanco */}
        <div className="p-6 text-gray-200"> {/* CAMBIO: Texto general a gris claro */}
          {activeTab === 'includes' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">¿Qué incluye el crucero?</h2> {/* CAMBIO: Título a blanco */}
              <ul className="space-y-3 mb-8">
                {cruiseData.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> {/* CAMBIO: Punto a teal claro */}
                    <span className="text-gray-200">{detail}</span> {/* CAMBIO: Texto a gris claro */}
                  </li>
                ))}
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span> {/* CAMBIO: Punto a teal claro */}
                  <span className="text-gray-200">Acceso a todas las instalaciones del barco</span> {/* CAMBIO: Texto a gris claro */}
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span> {/* CAMBIO: Punto a teal claro */}
                  <span className="text-gray-200">Espectáculos y entretenimiento a bordo</span> {/* CAMBIO: Texto a gris claro */}
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">¿Qué no incluye?</h2> {/* CAMBIO: Título a blanco */}
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span> {/* CAMBIO: Punto a rojo más claro */}
                  <span className="text-gray-200">Propinas obligatorias: USD 15 por persona por noche</span> {/* CAMBIO: Texto a gris claro */}
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span> {/* CAMBIO: Punto a rojo más claro */}
                  <span className="text-gray-200">Excursiones en los puertos de escala</span> {/* CAMBIO: Texto a gris claro */}
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span> {/* CAMBIO: Punto a rojo más claro */}
                  <span className="text-gray-200">Bebidas premium y restaurantes de especialidad</span> {/* CAMBIO: Texto a gris claro */}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CruiseDetailPage;