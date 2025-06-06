import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import Button from '../components/common/Button';

const ManagementPage: React.FC = () => {
  const [packages, setPackages] = useState([]);
  const [cruises, setCruises] = useState([]);
  const [activeTab, setActiveTab] = useState<'packages' | 'cruises'>('packages');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    destination: '',
    duration: '',
    departureDate: '',
    image: '',
    details: [''],
    price: 0,
    currency: 'USD'
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [packagesData, cruisesData] = await Promise.all([
      api.getPackages(),
      api.getCruises()
    ]);
    setPackages(packagesData);
    setCruises(cruisesData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem) {
        if (activeTab === 'packages') {
          await api.updatePackage(editingItem._id, formData);
        } else {
          await api.updateCruise(editingItem._id, formData);
        }
      } else {
        if (activeTab === 'packages') {
          await api.createPackage(formData);
        } else {
          await api.createCruise(formData);
        }
      }
      loadData();
      resetForm();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este item?')) {
      try {
        if (activeTab === 'packages') {
          await api.deletePackage(id);
        } else {
          await api.deleteCruise(id);
        }
        loadData();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      description: '',
      destination: '',
      duration: '',
      departureDate: '',
      image: '',
      details: [''],
      price: 0,
      currency: 'USD'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Gestión de Productos</h1>
        
        <div className="mb-8">
          <div className="flex space-x-4">
            <Button
              onClick={() => setActiveTab('packages')}
              variant={activeTab === 'packages' ? 'primary' : 'secondary'}
            >
              Paquetes
            </Button>
            <Button
              onClick={() => setActiveTab('cruises')}
              variant={activeTab === 'cruises' ? 'primary' : 'secondary'}
            >
              Cruceros
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">
              {editingItem ? 'Editar' : 'Agregar'} {activeTab === 'packages' ? 'Paquete' : 'Crucero'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form fields */}
              <div>
                <label className="block text-sm font-medium text-gray-300">Título</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white"
                  required
                />
              </div>
              
              {/* Add more form fields for other properties */}
              
              <div className="flex space-x-4">
                <Button type="submit" variant="primary">
                  {editingItem ? 'Actualizar' : 'Crear'}
                </Button>
                {editingItem && (
                  <Button onClick={resetForm} variant="secondary">
                    Cancelar
                  </Button>
                )}
              </div>
            </form>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">
              Lista de {activeTab === 'packages' ? 'Paquetes' : 'Cruceros'}
            </h2>
            
            <div className="space-y-4">
              {(activeTab === 'packages' ? packages : cruises).map((item: any) => (
                <div key={item._id} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <div className="mt-2 flex space-x-4">
                    <Button
                      onClick={() => setEditingItem(item)}
                      variant="secondary"
                      size="sm"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => handleDelete(item._id)}
                      variant="secondary"
                      size="sm"
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;