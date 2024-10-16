import React, { useState } from 'react';
import './App.css';
import { Menu, X } from 'lucide-react';
import Entradas from './components/Entradas';
import Almuerzos from './components/Almuerzos';
import Hamburguesas from './components/Hamburguesas';
import Tartas from './components/Tartas';
import Desayunos from './components/Desayunos';
import BigToast from './components/BigToast';
import Brusquetas from './components/Brusquetas';
import Postres from './components/Postres';
import Ensaladas from './components/Ensalada';
import Coffe from './components/Coffe';
import Licuados from './components/Licuados';
import Detox from './components/Detox';
import Bebidas from './components/Bebidas';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="main-container">
      <header className="text-white shadow-md section-nav">
        <div className="container px-4 py-4 flex justify-between items-center">
          {/* <h1 className="text-2xl font-bold">Meeting Resto&Bar</h1> */}
          <p>MENU</p>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-amber-600 text-white`}>
        <ul className="container mx-auto px-4 py-2">
          <li className="py-2"><a href="#desayunos" onClick={() => setIsMenuOpen(false)}>Desayunos</a></li>
          <li className="py-2"><a href="#entradas" onClick={() => setIsMenuOpen(false)}>Entradas & Picadas</a></li>
          <li className="py-2"><a href="#almuerzos" onClick={() => setIsMenuOpen(false)}>Nuestros Plantos</a></li>
          <li className="py-2"><a href="#hamburguesas" onClick={() => setIsMenuOpen(false)}>Hamburguesas & Sandwiches</a></li>
          <li className="py-2"><a href="#tartas" onClick={() => setIsMenuOpen(false)}>Tartas & Wraps</a></li>
          <li className="py-2"><a href="#ensaladas" onClick={() => setIsMenuOpen(false)}>Ensaladas</a></li>
          <li className="py-2"><a href="#toast" onClick={() => setIsMenuOpen(false)}>Big Toast</a></li>
          <li className="py-2"><a href="#brusquetas" onClick={() => setIsMenuOpen(false)}>Brusquetas</a></li>
          <li className="py-2"><a href="#tortas" onClick={() => setIsMenuOpen(false)}>Tortas & Delicias</a></li>
          <li className="py-2"><a href="#cafe" onClick={() => setIsMenuOpen(false)}>Cafeteria</a></li>
          <li className="py-2"><a href="#ensaladas" onClick={() => setIsMenuOpen(false)}>Bebidas</a></li>
          <li className="py-2"><a href="#licuados" onClick={() => setIsMenuOpen(false)}>Licuados&Exprimidos</a></li>
          <li className="py-2"><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox</a></li>
          <li className="py-2"><a href="#bebidas" onClick={() => setIsMenuOpen(false)}>Bebidas</a></li>
        </ul>
      </nav>
      <main className="container px-8 py-4">
      <section className="box-main">
        <img src="/public/source/logosinbg.webp" alt="" />
        <p className="text-center text-gray-600 mb-8">
          Bienvenido a nuestro menú digital. Explore nuestras deliciosas opciones y disfrute de una experiencia.
          <p>Comes como en casa , pero sin lavar los platos !!</p>
        </p>
        </section>
        <section className='box-main-plate'>
        <div id="cafeteria" className="mb-12">
          <Desayunos />
        </div>
        <div id="desayunos" className="mb-12">
          <Entradas />
        </div>
        <div id="almuerzos" className="mb-12">
          <Almuerzos />
        </div>
        <div id="cafeteria" className="mb-12">
          <Hamburguesas />
        </div>
        <div id="cafeteria" className="mb-12">
          <Tartas />
        </div>
        </section>
        <div id="cafeteria" className="mb-12">
          <Ensaladas />
        </div>
        <section className='box-big-Toast'>
            <BigToast />
          </section>
        <section className='box-big-Toast'>
            <Brusquetas />
          </section>
        <section className='box-big-Toast'>
            <Postres />
          </section>
        <section className='box-big-Toast'>
            <Coffe />
          </section>
        <section className='box-big-Toast'>
            <Licuados />
          </section>
        <section className='box-big-Toast'>
            <Detox />
          </section>
        <section className='box-big-Toast'>
            <Bebidas />
          </section>
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
