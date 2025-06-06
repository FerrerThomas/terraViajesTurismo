const API_URL = 'http://localhost:3000/api';

export const api = {
  // Packages
  getPackages: () => fetch(`${API_URL}/packages`).then(res => res.json()),
  createPackage: (data: any) => fetch(`${API_URL}/packages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
  updatePackage: (id: string, data: any) => fetch(`${API_URL}/packages/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
  deletePackage: (id: string) => fetch(`${API_URL}/packages/${id}`, {
    method: 'DELETE'
  }).then(res => res.json()),

  // Cruises
  getCruises: () => fetch(`${API_URL}/cruises`).then(res => res.json()),
  createCruise: (data: any) => fetch(`${API_URL}/cruises`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
  updateCruise: (id: string, data: any) => fetch(`${API_URL}/cruises/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
  deleteCruise: (id: string) => fetch(`${API_URL}/cruises/${id}`, {
    method: 'DELETE'
  }).then(res => res.json()),

  // Consultations
  createConsultation: (data: any) => fetch(`${API_URL}/consultations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
  getConsultations: () => fetch(`${API_URL}/consultations`).then(res => res.json())
};