import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Navigating complex customs procedures with expertise and efficiency for businesses worldwide.";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Stronger overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1728839470502-59edad620f96?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <Container className="relative h-screen flex items-center">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            {/* Large Text */}
            <div className="mb-8">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
              >
                <span className="block text-white animate-fadeInUp opacity-0">
                  Your Gateway to
                </span>
                <span className="block animate-fadeInUp delay-300 opacity-0">
                  <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
                    Global Trade
                  </span>
                </span>
                <span className="block text-white animate-fadeInUp delay-600 opacity-0">
                  Excellence
                </span>
              </h1>
            </div>

            {/* Smaller Text */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
            >
              <span className="block text-white animate-fadeInUp delay-900 opacity-0">
                Streamlined
              </span>
              <span className="block animate-fadeInUp delay-1200 opacity-0">
                <span className="bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text">
                  Customs Clearance
                </span>
              </span>
              <span className="block text-white animate-fadeInUp delay-1500 opacity-0">
                Solutions
              </span>
            </h2>
          </div>
          
          <div className="relative h-20">
            <p 
              className="text-xl text-gray-100 absolute"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                borderRight: currentIndex < fullText.length ? '2px solid white' : 'none',
              }}
            >
              {displayText}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_1s_ease-out_1.8s_forwards] opacity-0">
            <Link to="/services">
              <Button 
                variant="primary" 
                size="lg" 
                className="group bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-none hover:from-blue-600 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300"
              >
                <span>Our Services</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;