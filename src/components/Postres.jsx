import React from 'react'
import CategoryDelicious from './CategoryDelicious';
import sweetMenu from '../../public/dataSweet';

const Postres = () => {
    const postreData = {
    "Cositas Ricas" : sweetMenu["Cositas Ricas"],
    };

return (
    <section>
            <section className='flex sweet-section'>
                <article className='title-toast'>
                    <h2 className='text-5xl py-10'>Tortas & Delicias</h2>
                </article>
            </section>
    {Object.entries(postreData).map(([category, items]) => (
        <CategoryDelicious key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Postres