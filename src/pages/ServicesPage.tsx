import React, { useState } from 'react';
import Container from '../components/ui/Container';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Truck, Ship, Plane, Package, FileCheck, BarChart3, Clock, Globe } from 'lucide-react';
import ContactModal from '../components/ui/ContactModal';

const ServicesPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const logisticsServices = [
    {
      id: 1,
      title: "International Freight Forwarding",
      description: "Comprehensive freight solutions across air, sea, and land routes with full documentation support.",
      icon: <Globe className="w-10 h-10 text-primary" />
    },
    {
      id: 2,
      title: "Customs Clearance",
      description: "Expert handling of all customs documentation and procedures for smooth border crossings.",
      icon: <FileCheck className="w-10 h-10 text-primary" />
    },
    {
      id: 3,
      title: "Air Freight",
      description: "Expedited air shipping solutions for time-sensitive cargo with global coverage.",
      icon: <Plane className="w-10 h-10 text-primary" />
    },
    {
      id: 4,
      title: "Ocean Freight",
      description: "Cost-effective sea freight options for large shipments with flexible scheduling.",
      icon: <Ship className="w-10 h-10 text-primary" />
    },
    {
      id: 5,
      title: "Road Transportation",
      description: "Reliable ground logistics services for local and cross-border deliveries.",
      icon: <Truck className="w-10 h-10 text-primary" />
    },
    {
      id: 6,
      title: "Warehousing & Distribution",
      description: "Secure storage facilities with inventory management systems for your goods.",
      icon: <Package className="w-10 h-10 text-primary" />
    },
    {
      id: 7,
      title: "Supply Chain Analytics",
      description: "Data-driven insights to optimize your logistics operations and reduce costs.",
      icon: <BarChart3 className="w-10 h-10 text-primary" />
    },
    {
      id: 8,
      title: "Express Delivery",
      description: "Time-definite delivery services for urgent shipments with guaranteed delivery windows.",
      icon: <Clock className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Modal component */}
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceName={selectedService} 
      />

      <div className="bg-primary py-16">
        <Container>
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Explore our comprehensive range of customs clearance and logistics solutions designed 
              to streamline your international trade operations.
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16">
        <AnimatedSection animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Logistics Solutions Tailored to Your Needs
            </h2>
            <p className="text-lg text-gray-600">
              At Overnight Logistics, we offer a wide range of services to meet the diverse needs of businesses 
              engaged in international trade. Browse our solutions below or contact us for a customized approach.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {logisticsServices.map((service) => (
            <AnimatedSection key={service.id} animation="fade-up">
              <div 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <div className="mt-4 text-primary font-medium">Click to inquire</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>

      <div className="bg-gray-50 py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Overnight Logistics</h2>
                <p className="text-gray-600 mb-6">
                  Our team of experts brings years of experience in customs regulations and international 
                  logistics to ensure your shipments move smoothly across borders.
                </p>
                <ul className="space-y-4">
                  {[
                    'Expert knowledge of customs regulations',
                    'Dedicated account managers for personalized service',
                    'Advanced tracking technology for complete visibility',
                    'Streamlined processes to minimize delays',
                    'Competitive pricing with transparent fee structure',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <img 
                src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Logistics professionals working" 
                className="rounded-lg shadow-lg"
              />
            </AnimatedSection>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServicesPage;