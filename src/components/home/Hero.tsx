import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  // Import Alpha Slab One font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Alpha+Slab+One&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const slides = [
    {
      id: 1,
      title: "MOST AFFORDABLE WAY TO SHIP PRODUCTS",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=3270&auto=format&fit=crop",
      subtitle: "Enjoy effortless delivery on destination"
    },
    {
      id: 2,
      title: "RELIABLE LOGISTICS SOLUTIONS",
      image: "https://images.unsplash.com/photo-1664707004094-6653e58a08cc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subtitle: "Track your shipments in real-time"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-teal-800 font-sans">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url('${slides[currentSlide].image}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* Darker overlay for better text visibility */}
          <div className="absolute inset-0 bg-teal-900/70"></div>
        </motion.div>
      </AnimatePresence>

      <Container className="relative h-screen flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex-1 flex items-center pt-24">
          <div className="max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-white leading-tight uppercase" 
                    style={{ 
                      fontFamily: "'Alpha Slab One'", 
                      letterSpacing: '0.01em', 
                      textShadow: '0 6px 12px rgba(0,0,0,0.6)',
                      lineHeight: '1.05',
                      fontWeight: 'bold'
                    }}>
                  {slides[currentSlide].title}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="pb-16 flex items-end justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-teal-800/80 backdrop-blur-sm rounded-lg p-2 flex items-center">
              <div className="text-white text-sm mr-4 font-medium">
                <span className="text-lime-300 text-lg" style={{ fontFamily: "'Alpha Slab One', cursive" }}>0{currentSlide + 1}</span> / 0{totalSlides}
              </div>
              
              <div className="flex items-center">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full hover:bg-teal-700 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 text-white" />
                </button>
                <div className="mx-2 text-white/30">|</div>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full hover:bg-teal-700 transition-colors"
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
            
            <div className="bg-teal-800/80 backdrop-blur-sm rounded-lg p-4 max-w-xs">
              <p className="text-white text-sm font-medium tracking-wide">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-16 right-8 bg-teal-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs hidden md:block"
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-lime-300 flex items-center justify-center mr-3">
                <ChevronRight className="h-5 w-5 text-teal-900" />
              </div>
              <div>
                <h3 className="text-white tracking-tight" style={{ fontFamily: "'Alpha Slab One', cursive", fontSize: '18px' }}>Delivery Solutions</h3>
                <p className="text-white/70 text-xs font-medium">Your delivery data</p>
              </div>
              <div className="ml-auto text-white/70 text-xs font-medium">12:30</div>
            </div>
            <div className="rounded-lg overflow-hidden mt-2">
              <img 
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=3270&auto=format&fit=crop" 
                alt="Cargo ship" 
                className="w-full h-24 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;