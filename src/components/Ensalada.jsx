import React from 'react'
import CategoryHealtly from './CategoryHealtly';
import menuData from '../../public/data';
// import './CategoryHealtly.css'

const Ensaladas = () => {
    const saladData = {
    "Opciones" : menuData["Ensaladas"]
    };

return (
    <section id="ensaladas">
            <section className='brusquetas-section'>
                <article className='title-brusquetas'>
                    <h2 className='text-5xl'>Ensaladas de la Casa</h2>
                </article>
            </section>
    {Object.entries(saladData).map(([category, items]) => (
        <CategoryHealtly key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Ensaladas