import React from 'react';
import { useCompare } from '../contexts/CompareContext';

export const ProductCard = ({ product }) => {
  const { selected, toggleSelect } = useCompare();
  const isSelected = selected.find(p => p.id === product.id);
  return (
    <div className={`border rounded p-3 shadow hover:shadow-lg transition cursor-pointer ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}>
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" loading="lazy" />
      <h2 className="font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.brand}</p>
      <p className="font-bold text-lg mt-1">${product.price}</p>
      <ul className="text-sm mt-2">
        {Object.entries(product.features).map(([key, value]) => (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </p>
        ))}

      </ul>
      <button onClick={() => toggleSelect(product)} className={`mt-3 w-full py-1 rounded ${isSelected ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`} aria-pressed={!!isSelected}>
        {isSelected ? 'Remove' : 'Add to Compare'}
      </button>
    </div>
  );
}
