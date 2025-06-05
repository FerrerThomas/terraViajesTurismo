import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, ArrowLeft, MapIcon as WhatsappIcon } from 'lucide-react';
import { travelPackages } from '../data/packages';
import Button from '../components/common/Button';

type TabType = 'includes' | 'rates' | 'departure';

const PackageDetailPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<TabType>('includes');
  
  const packageData = travelPackages.find(pkg => pkg.id === Number(id));

  if (!packageData) {
    return <div className="text-white text-center py-20">Package not found</div>;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: packageData.title,
        text: `Check out this amazing travel package: ${packageData.title}`,
        url: window.location.href,
      });
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`¡Mira este paquete de viaje! ${packageData.title} - ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <main className="py-24 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Navigation */}
        <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>Volver al inicio</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Compartir:</span>
            <button
              onClick={handleWhatsAppShare}
              className="text-gray-600 hover:text-green-600 transition-colors"
              aria-label="Compartir por WhatsApp"
            >
              <WhatsappIcon size={20} />
            </button>
            <button
              onClick={handleShare}
              className="text-gray-600 hover:text-teal-600 transition-colors"
              aria-label="Compartir"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Package Details */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <img
              src={packageData.image}
              alt={packageData.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="lg:w-1/3 p-6 bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{packageData.title}</h1>
            <div className="mb-4">
              <span className="text-gray-600 text-sm">Desde</span>
              <div className="text-3xl font-bold text-gray-900">
                {packageData.currency} {packageData.price.toLocaleString()}
              </div>
            </div>
            <div className="mb-6">
              <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded">
                SALIDA {packageData.departureDate.toUpperCase()}
              </span>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Consultar
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            {['includes', 'rates', 'departure'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab as TabType)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'includes' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué incluye el viaje?</h2>
              <ul className="space-y-3 mb-8">
                {packageData.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span className="text-gray-700">Traslados aeropuerto - hotel - aeropuerto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span className="text-gray-700">Asistencia al viajero</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué no incluye?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Fee de ingreso al complejo: USD 50</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Limpieza final: USD 270 (por el total de la reserva)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Gastos personales y propinas</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default PackageDetailPage;