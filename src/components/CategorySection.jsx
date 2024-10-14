import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const CategorySection = ({ category, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-8">
            <button
                className="flex items-center justify-between w-full py-2 px-4 bg-amber-100 text-amber-900 rounded-lg shadow-md hover:bg-amber-200 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-xl font-semibold">{category}</h2>
                <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md box-lunch">
                            <h3 className="text-lg font-semibold mb-2 entrada">{item.name}</h3>
                            <p className="text-gray-600 mb-2">{item.description}</p>
                            <p className="text-amber-600 font-bold">${item.price.toFixed(3)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategorySection;