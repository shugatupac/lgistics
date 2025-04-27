import React, { useState, useMemo } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import { products } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = useMemo(() => ['All', ...new Set(products.map(p => p.category))], []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-20">
      <div className="bg-primary py-16">
        <Container>
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Discover our premium selection of electronics and gaming equipment.
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <AnimatedSection key={product.id} animation="fade-up">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden group h-64">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <div className="flex gap-3">
                      <a 
                        href={`https://wa.me/${(product as { phone?: string }).phone?.replace(/[^0-9]/g, '') || '1234567890'}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                        aria-label={`WhatsApp about ${product.name}`}
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                      <a 
                        href={`tel:${(product as { phone?: string }).phone || '1234567890'}`}
                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                        aria-label={`Call about ${product.name}`}
                      >
                        <Phone className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;