import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../../public/data';

const Entradas = () => {
  const entradaData = {
    "Entradas": menuData["Entradas y Picadas"]
  };

  return (
    <section id="entradas">
      <h1 className="text-2xl font-bold mb-4">Entradas y Picadas</h1>
      {Object.entries(entradaData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default Entradas;