import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../data/data';
import casa from '../imgs/ensaladas/casa.webp'

const Almuerzos = () => {
  const almuerzosData = {
    "Almuerzos": menuData["Nuestros Platos"]
  };

  return (
    <section id="almuerzos">
      <h1 className="text-2xl font-bold mb-4">Nuestros Platos</h1>
      {Object.entries(almuerzosData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
      <img src={casa} alt="casa" />
    </section>
  );
};

export default Almuerzos;