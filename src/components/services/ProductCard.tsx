import React from 'react';
import { Product } from '../../types';
import AnimatedSection from '../ui/AnimatedSection';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <AnimatedSection delay={index * 100} animation="fade-up">
      <div className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative overflow-hidden h-48">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-primary/90 text-white text-sm font-medium px-3 py-1 rounded-full">
            {product.category}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
          <button className="mt-auto text-primary font-medium hover:underline">
            Learn more
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProductCard;