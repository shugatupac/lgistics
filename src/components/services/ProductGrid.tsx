import React, { useState, useMemo } from 'react';
import { Product } from '../../types';
import { products } from '../../data';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const categories = useMemo(() => ['All', ...new Set(products.map(p => p.category))], []);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') {
      return products;
    }
    return products.filter(product => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;