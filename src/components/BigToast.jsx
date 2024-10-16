import React from 'react'
import CategoryInfo from './CategoryInfo';
import enterMenu from '../../public/dataSecondary';

const BigToast = () => {
    const toastData = {
    "Pan de Campo" : enterMenu["Big Toast"],
    };

return (
    <section id="toast" className='py-10'>
            <section className='flex toast-section'>
                <article className='title-toast'>
                    <h2 className='text-5xl'>Big Toast</h2>
                    <p className='text-1x1'>con exprimido o infusión a elección</p>
                </article>
                <img className='img-toast' src="/public/source/bigtoast/btsinbg.webp" alt="" />
            </section>
    {Object.entries(toastData).map(([category, items]) => (
        <CategoryInfo key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default BigToast