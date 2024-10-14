import React from 'react';
import CategorySection from '../components/CategorySection';
import enterMenu from '../../public/dataSecondary';

const Desayunos = () => {
  const desayunosData = {
    "Desayuno": enterMenu["Desayunos y Meriendas"]
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Desayunos y Meriendas</h1>
      {Object.entries(desayunosData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default Desayunos;