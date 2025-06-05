import React from 'react';
import Hero from '../components/Hero';
import PackageSection from '../components/PackageSection';
import CruiseSection from '../components/CruiseSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <PackageSection />
      <CruiseSection />
    </main>
  );
};

export default HomePage;