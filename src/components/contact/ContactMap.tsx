import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const ContactMap: React.FC = () => {
  return (
    <AnimatedSection animation="fade-up">
      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 h-full">
        <div className="relative pb-[60%] h-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2543765430408!2d3.3766246000000003!3d6.4548041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2067475efd%3A0xb2ef3a96e2a397e5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1689252594369!5m2!1sen!2sng"
            width="100%"
            height="100%"
            className="absolute top-0 left-0 rounded-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aviance Clearing Agent Location"
          ></iframe>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactMap;