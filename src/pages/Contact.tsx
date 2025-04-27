import React from 'react';
import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import AnimatedSection from '../components/ui/AnimatedSection';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-primary py-16">
        <Container>
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Get in touch with our team for any inquiries or to discuss how we can help with your logistics needs.
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>

        <div className="mt-20">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our customs clearing and logistics services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What documents are required for customs clearance?',
                answer: 'Typically, you\'ll need a commercial invoice, packing list, bill of lading or airway bill, certificate of origin, and any specific permits or certificates required for your particular goods.',
              },
              {
                question: 'How long does the customs clearance process take?',
                answer: 'Standard clearance typically takes 2-5 business days, but this can vary based on the type of goods, destination country, and completeness of documentation. Our express service can expedite this process.',
              },
              {
                question: 'Do you handle both import and export customs clearance?',
                answer: 'Yes, we provide comprehensive customs clearing services for both imports and exports across multiple countries and regions.',
              },
              {
                question: 'Can you help with special permits for restricted goods?',
                answer: 'Absolutely. Our team has expertise in handling specialized permits and documentation for restricted or regulated items including pharmaceuticals, food products, and hazardous materials.',
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="fade-up">
                <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;