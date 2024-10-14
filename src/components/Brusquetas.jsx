import React from 'react'
import CategoryInfo from './CategoryInfo';
import enterMenu from '../../public/dataSecondary';

const Brusquetas = () => {
    const toastData = {
    "Exquitos pan de Campo" : enterMenu["Brusquetas"]
    };

return (
    <section>
            <section className='brusquetas-section'>
            <img className='mx-6 my-10' src="/src/assets/bigtoast/brusqueta.webp" alt="" />
                <article className='title-brusquetas'>
                    <h2 className='text-5xl'>Brusquetas</h2>
                </article>
            </section>
    {Object.entries(toastData).map(([category, items]) => (
        <CategoryInfo key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Brusquetas