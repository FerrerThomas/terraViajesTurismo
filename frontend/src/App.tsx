import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PackageDetailPage from './pages/PackageDetailPage';
import CruiseDetailPage from './pages/CruiseDetailPage';
import ManagementPage from './pages/ManagementPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/package/:id" element={<PackageDetailPage />} />
          <Route path="/cruise/:id" element={<CruiseDetailPage />} />
          <Route path="/gestionPaquetes" element={<ManagementPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;