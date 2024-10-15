import React from 'react';
import CategorySection from './CategorySection';
import menuData from '../../public/data';

const Tartas = () => {
  const tartasData = {
    "Tartas (acompañadas con mix de ojas verdes)": menuData["Tartas"],
    "Wraps (acompañadas con papas rusticas)": menuData["Wraps"]
  };

  return (
    <section id="tartas">
      <h1 className="text-2xl font-bold mb-4">Tartas y Wraps</h1>
      {Object.entries(tartasData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default Tartas;