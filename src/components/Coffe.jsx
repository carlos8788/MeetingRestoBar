import React from 'react'
import drinkData from '../../public/dataDrink';
import CategoryCoffe from './CategoryCoffe';
import './CategoryCoffe.css'

const Coffe = () => {
    const coffeData = {
    "Opciones:" : drinkData["Cafeteria"],
    };

return (
    <section  className="section-coffe mt-10 py-10 text-white">
            <section className='flex'>
                <article className='title-postre'>
                    <h2 className='text-5xl py-5'>Cafeteria</h2>
                </article>
            </section>
    {Object.entries(coffeData).map(([category, items]) => (
        <CategoryCoffe key={category} category={category} items={items} />
    ))}
    <article>
        <div className="py-5">
        <h1>Disfruta de nuestras riquisimas Medialunas acompañadas con un buen cafe.</h1>
        <p>Tenemos Promo de Cafeteria y MediaLunas</p>
        </div>
        <img src="/src/assets/meriendas/medialunas.png" alt="" />
    </article>
    </section>
)
}

export default Coffe


// <section className='budin my-6'>
// <div className='box-description'>
// <p className='text-4xl font-extrabold text-yellow-600 py-2'>NUEVO</p>
// <p className='text-3xl title font-extrabold'>Budin De Pan</p>
// <p className='text-description font-semibold'>Cremoso y exquisito, acompañado con crema blanca y tentador dulce de leche</p>
// </div>
// <img src="/src/assets/delicias/budindos.PNG" alt="" />
// </section>