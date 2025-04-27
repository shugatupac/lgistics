import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import AnimatedSection from '../ui/AnimatedSection';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  phone: string;
  whatsapp: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "Latest Apple smartphone with advanced camera system, A17 Pro chip, and titanium design for premium performance.",
    image: "https://images.unsplash.com/photo-1697284959152-32ef13855932?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "+1234567890",
    whatsapp: "+1234567890"
  },
  {
    id: 2,
    name: "Gaming PC",
    description: "High-performance gaming desktop with RTX 4080, 32GB RAM, and liquid cooling for immersive gaming experiences.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop",
    phone: "+1234567891",
    whatsapp: "+1234567891"
  },
  {
    id: 3,
    name: "OLED Smart TV",
    description: "65-inch 4K OLED TV with HDR, Dolby Vision, and smart features for stunning picture quality and entertainment.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop",
    phone: "+1234567892",
    whatsapp: "+1234567892"
  },
  {
    id: 4,
    name: "PlayStation 5",
    description: "Next-gen gaming console with lightning-fast loading, haptic feedback controllers, and exclusive game titles.",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2427&auto=format&fit=crop",
    phone: "+1234567893",
    whatsapp: "+1234567893"
  }
];

const ProductFeature: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">
              Explore our selection of premium gadgets and electronics for your tech needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 100} animation="fade-up">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                  <div className="flex justify-center gap-4 mt-auto">
                    <a 
                      href={`https://wa.me/${product.whatsapp.replace(/[^0-9]/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                      aria-label={`WhatsApp about ${product.name}`}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a 
                      href={`tel:${product.phone}`} 
                      className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                      aria-label={`Call about ${product.name}`}
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductFeature;