import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../../public/data';

const Hamburguesas = () => {
  const hamburguesas = {
    "Hamburguesas": menuData["Hamburguesas"],
    "Sandwiches (pan de ciabatta)" : menuData["Nuestros Sandwiches"],
  };

  return (
    <section id="hamburguesas">
      <h1 className="text-2xl font-bold mb-4">Hamburguesas & Sandwiches</h1>
      {Object.entries(hamburguesas).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default Hamburguesas;