import React, { useState } from 'react';
import products from '../lib/products';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  const [query, setQuery] = useState('');
  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.brand.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border p-2 mb-4 w-full rounded 
             bg-white text-gray-900 
             dark:bg-gray-700 dark:text-gray-100 
             placeholder-gray-400 dark:placeholder-gray-300"
      />
      {
        filtered.length === 0 ? <div className="p-10 text-center border rounded bg-red-100 dark:bg-red-800">
          <p className="mb-4">Please enter a valid search string.</p>
          <button
            onClick={() => setQuery('')}
            className="px-3 py-1 rounded bg-blue-500 text-white"
          >
            Clear filters
          </button>
        </div> :
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
      }
    </div>
  );
}
