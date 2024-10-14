import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import menuData from '../public/data.js';
import './app.css';

const CategorySection = ({ category, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        className="flex items-center justify-between w-full py-2 px-4 bg-amber-100 text-amber-900 rounded-lg shadow-md hover:bg-amber-200 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold">{category}</h2>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-amber-600 font-bold">${item.price.toFixed(3)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="text-black shadow-md nav-header box-main mb-10">
      <h1 className="text-2xl font-bold">Meeting Resto&Bar</h1>
      <p>MENU</p>
        {/* <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Meeting Resto - Bar</h1>
          <p>MENU</p>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div> */}
      </header>

      <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-amber-500 text-white`}>
        <ul className="container mx-auto px-4 py-2">
          {Object.keys(menuData).map((category) => (
            <li key={category} className="py-2">
              <a href={`#${category}`} onClick={() => setIsMenuOpen(false)}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="container mx-auto px-4 py-8 container-main">
        <section className="box-main">
        <img src="/src/assets/logosinbg.webp" alt="" />
        <p className="text-center text-gray-600 mb-8">
          Bienvenido a nuestro menú digital. Explore nuestras deliciosas opciones y disfrute de una experiencia.
          <p>Comes como en casa , pero sin lavar los platos !!</p>
        </p>
        </section>
        {Object.entries(menuData).map(([category, items]) => (
          <CategorySection key={category} category={category} items={items} />
        ))}
      </main>

      <footer className="bg-amber-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>Av Libertador 7281</p>
          <p>Av Figueroa Alcorta 7250</p>
          <p>Virrey de Pino 1480</p>
        </div>
        <div>
          <p>Seguinos en Nuestras RRSS</p>
          <p>Instagram</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
