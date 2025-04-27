import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import ProductFeature from '../components/home/ProductFeature';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ProductFeature />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;