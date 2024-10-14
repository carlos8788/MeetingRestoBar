import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../../public/data';

const Almuerzos = () => {
  const almuerzosData = {
    "Almuerzos": menuData["Nuestros Platos"]
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Nuestros Platos</h1>
      {Object.entries(almuerzosData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default Almuerzos;