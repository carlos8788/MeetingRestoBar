import React from 'react'
import CategoryDetox from './CategoryDetox';
import drinkData from '../../public/dataDrink';

const Detox = () => {
    const detoxData = {
    "Orgánicos y sin conservantes" : drinkData["Opciones Detox"]
    };

return (
    <section id="detox" className='pb-10'>
            <section className='detox-section'>
            <img className='my-10' src="/src/assets/green.webp" alt="" />
                <article className='title-toast py-5'>
                    <h2 className='text-5xl'>Detox</h2>
                </article>
            </section>
    {Object.entries(detoxData).map(([category, items]) => (
        <CategoryDetox key={category} category={category} items={items} />
    ))}
                <img className='my-10' src="/src/assets/orange.webp" alt="" />
    </section>
)
}

export default Detox