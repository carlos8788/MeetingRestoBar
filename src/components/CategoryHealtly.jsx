import React from 'react'
import './CategoryHealtly.css'

const CategoryHealtly = ({ category, items }) => {
    return (
        <section className='section-salad'>
                <h2 className="text-3xl font-semibold py-8">{category}</h2>
            <div className="mt-0 grid gap-2 sm:grid-cols-4 lg:grid-cols-6">
                {items.map((item) => (
                    <div key={item.id} className="p-4 flex box-salad">
                        <h3 className="text-2xl font-semibold mb-2 entrada">{item.name}</h3>
                        <p className="mb-2">{item.description}</p>
                        {item.image && <img src={item.image} alt={item.name} />}
                        <p className="text-amber-800 text-base font-extrabold">${item.price.toFixed(3)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryHealtly