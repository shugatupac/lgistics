import React from 'react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const ContactForm: React.FC = () => {
  return (
    <AnimatedSection animation="fade-up">
      <form className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Your email"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="What is this regarding?"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service of Interest
          </label>
          <select
            id="service"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
          >
            <option value="">Select a service</option>
            <option value="customs">Customs Clearance</option>
            <option value="freight">Freight Forwarding</option>
            <option value="warehousing">Warehousing</option>
            <option value="supply">Supply Chain Solutions</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Tell us about your needs or questions"
          ></textarea>
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;