import React from 'react';
import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';

const Contact: React.FC = () => {
  return (
    <div className="pb-20">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with our team for any inquiries or to discuss how we can help with your logistics needs."
        backgroundImage="https://images.unsplash.com/photo-1577416412292-f1b7b0e19fcd?q=80&w=3270&auto=format&fit=crop"
        height="tall"
      />

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
              {
                question: 'What are your service areas?',
                answer: 'We operate globally with offices in major trade hubs across North America, Europe, Asia, and Australia, allowing us to provide seamless service worldwide.',
              },
              {
                question: 'Do you offer insurance for shipments?',
                answer: 'Yes, we provide comprehensive cargo insurance options to protect your goods during transit against loss, damage, or theft.',
              },
              {
                question: 'How do I track my shipment?',
                answer: 'You can track your shipment in real-time through our online portal or mobile app using your unique tracking number provided at the time of booking.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, wire transfers, and corporate accounts with net payment terms for qualified businesses.',
              },
              {
                question: 'Can you handle oversized or specialized cargo?',
                answer: 'Yes, we specialize in handling oversized, heavy, and project cargo with our specialized equipment and experienced team.',
              },
              {
                question: 'How do I get a quote for my shipment?',
                answer: 'You can request a quote through our website, by calling our customer service team, or by emailing us with details of your shipment.',
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;