import React from 'react'
import CategoryBebidas from './CategoryBebidas';
import drinkData from '../../public/dataDrink';
import './CategoryBebidas.css'

const Bebidas = () => {
    const bebidasData = {
    "Aguas Saborizas y Gaseosas" : drinkData["Bebidas"],
    };

return (
    <section id="bebidas"  className="section-bebidas">
            <section className='flex'>
                <article className='title-postre'>
                    <h2 className='text-5xl py-4'>Bebidas</h2>
                </article>
            </section>
    {Object.entries(bebidasData).map(([category, items]) => (
        <CategoryBebidas key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Bebidas