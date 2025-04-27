import React from 'react';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '../../types';
import { services } from '../../data';
import Container from '../ui/Container';
import AnimatedSection from '../ui/AnimatedSection';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive logistics and customs solutions designed to streamline your international trade operations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: Service, index: number) => {
            // Dynamically select the icon component from lucide-react
            const IconComponent = Icons[service.icon as keyof typeof Icons];
            
            return (
              <AnimatedSection key={service.id} delay={index * 100} animation="fade-up">
                <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col">
                  <div className="bg-primary/10 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {IconComponent && <IconComponent className="h-7 w-7 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link 
                    to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary font-medium mt-auto"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;