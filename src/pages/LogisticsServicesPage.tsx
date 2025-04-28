import React, { useState, useMemo } from 'react';
import { Phone, MessageCircle, Truck, FileText, Package, Globe } from 'lucide-react';
import Container from '../components/ui/Container';
import AnimatedSection from '../components/ui/AnimatedSection';
import ContactModal from '../components/ui/ContactModal';
import PageHero from '../components/ui/PageHero';

// Sample logistics services data
const logisticsServices = [
  {
    id: 1,
    name: "International Freight Forwarding",
    description: "Complete door-to-door shipping solutions for your cargo across international borders with expert handling of documentation.",
    category: "Shipping",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    price: "Custom Quote",
    phone: "+1234567890"
  },
  {
    id: 2,
    name: "Customs Brokerage",
    description: "Expert assistance with customs documentation, tariff classification, and regulatory compliance to ensure smooth clearance.",
    category: "Customs",
    imageUrl: "https://images.unsplash.com/photo-1580537782709-a15bb3c13a01?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp",
    price: "",
    phone: "+1234567890"
  },
  {
    id: 3,
    name: "Warehousing & Distribution",
    description: "Secure storage facilities and efficient distribution networks to optimize your supply chain operations.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
    price: "",
    phone: "+1234567890"
  },
  {
    id: 4,
    name: "Import/Export Documentation",
    description: "Comprehensive preparation and processing of all required documentation for international trade compliance.",
    category: "Documentation",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    price: "",
    phone: "+1234567890"
  },
  {
    id: 5,
    name: "Air Freight Services",
    description: "Fast and reliable air transportation for time-sensitive shipments with global coverage and tracking.",
    category: "Shipping",
    imageUrl: "https://images.unsplash.com/photo-1627335824187-34e81d047961?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "",
    phone: "+1234567890"
  },
  {
    id: 6,
    name: "Ocean Freight Solutions",
    description: "Cost-effective sea transportation for large volume shipments with flexible scheduling options.",
    category: "Shipping",
    imageUrl: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
    price: "",
    phone: "+1234567890"
  }
];

const LogisticsServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  const categories = useMemo(() => ['All', ...new Set(logisticsServices.map(p => p.category))], []);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return logisticsServices;
    return logisticsServices.filter(service => service.category === activeCategory);
  }, [activeCategory]);

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  // Function to get the appropriate icon for each category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Shipping': return <Truck className="w-5 h-5 mr-2" />;
      case 'Customs': return <FileText className="w-5 h-5 mr-2" />;
      case 'Storage': return <Package className="w-5 h-5 mr-2" />;
      case 'Documentation': return <FileText className="w-5 h-5 mr-2" />;
      default: return <Globe className="w-5 h-5 mr-2" />;
    }
  };

  return (
    <div className="pb-20">
      {/* Modal component */}
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceName={selectedService} 
      />

      <PageHero 
        title="Logistics & Clearance Services" 
        subtitle="Comprehensive solutions to streamline your global trade operations and ensure smooth customs clearance."
        backgroundImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop"
        height="tall"
      />

      <Container className="py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center ${
                activeCategory === category
                  ? 'bg-teal-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category !== 'All' && getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <AnimatedSection key={service.id} animation="fade-up">
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleServiceClick(service.name)}
              >
                <div className="relative overflow-hidden group h-64">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-teal-700/90 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center">
                      {getCategoryIcon(service.category)}
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-teal-700">{service.price}</span>
                    <div className="flex gap-3">
                      <a 
                        href={`https://wa.me/${service.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                        aria-label={`WhatsApp about ${service.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                      <a 
                        href={`tel:${service.phone}`}
                        className="bg-teal-700 text-white p-2 rounded-full hover:bg-teal-800 transition-colors"
                        aria-label={`Call about ${service.name}`}
                        onClick={(e) => e.stopPropagation()}
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

export default LogisticsServicesPage;