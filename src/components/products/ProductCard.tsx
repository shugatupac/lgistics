import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  whatsapp: string;
  phone: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group relative">
      <div className="h-48 bg-gray-200">
        {/* Replace with actual image when available */}
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          {product.name} Image
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
      
      {/* Contact icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a 
          href={`https://wa.me/${product.whatsapp.replace(/[^0-9]/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
          aria-label={`WhatsApp about ${product.name}`}
        >
          <MessageCircle size={24} />
        </a>
        <a 
          href={`tel:${product.phone}`} 
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          aria-label={`Call about ${product.name}`}
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;