import React from 'react'
import CategoryDelicious from './CategoryDelicious';
import sweetMenu from '../../public/dataSweet';
import './CategoryInfo.css'

const Postres = () => {
    const postreData = {
    "Cositas Ricas" : sweetMenu["Cositas Ricas"],
    };

return (
    <section id="tortas"  className="section-delicious">
            <section className='flex'>
                <article className='title-postre'>
                    <h2 className='text-5xl py-10'>Tortas & Delicias</h2>
                </article>
            </section>
    {Object.entries(postreData).map(([category, items]) => (
        <CategoryDelicious key={category} category={category} items={items} />
    ))}
    <section className='budin my-6'>
        <div className='box-description'>
    <p className='text-4xl font-extrabold text-yellow-600 py-2'>NUEVO</p>
    <p className='text-3xl title font-extrabold'>Budin De Pan</p>
    <p className='text-description font-semibold'>Cremoso y exquisito, acompañado con crema blanca y tentador dulce de leche</p>
    </div>
        <img src="/src/assets/delicias/budindos.PNG" alt="" />
    </section>
    </section>
)
}

export default Postres