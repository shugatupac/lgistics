import React from 'react';
import ProductCard from '../components/products/ProductCard';

// Sample product data
const products = [
  {
    name: "Customs Clearing Service",
    description: "Expert handling of all customs documentation and procedures for smooth border crossings.",
    whatsapp: "+1234567890",
    phone: "+1234567890"
  },
  {
    name: "Freight Forwarding",
    description: "Efficient transportation solutions for your cargo across air, sea, and land routes.",
    whatsapp: "+1234567891",
    phone: "+1234567891"
  },
  {
    name: "Supply Chain Solutions",
    description: "End-to-end management of your logistics needs with real-time tracking and reporting.",
    whatsapp: "+1234567892",
    phone: "+1234567892"
  },
  {
    name: "Warehousing",
    description: "Secure storage facilities with inventory management systems for your goods.",
    whatsapp: "+1234567893",
    phone: "+1234567893"
  }
];

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;