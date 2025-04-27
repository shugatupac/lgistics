import React, { useEffect, useState } from 'react';
import { ArrowRight, Package, Globe, Truck } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  // 3D floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  };

  // Rotating animation variants
  const rotatingAnimation = {
    animate: {
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Stronger overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[15%] right-[10%] z-10"
          variants={floatingAnimation}
          animate="animate"
          style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))" }}
        >
          <Globe className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400 opacity-90" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[20%] left-[15%] z-10"
          variants={floatingAnimation}
          animate="animate"
          custom={1}
          style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))" }}
        >
          <Package className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-blue-300 opacity-80" />
        </motion.div>
        
        <motion.div 
          className="absolute top-[40%] left-[8%] z-10"
          variants={floatingAnimation}
          animate="animate"
          style={{ 
            perspective: "1000px",
            filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))"
          }}
        >
          <Truck className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-500 opacity-90" />
        </motion.div>
      </div>
      
      {/* Background Image with parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1688452987587-d38a58f9a405?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      ></motion.div>

      <Container className="relative h-screen flex items-center justify-center">
        <div className="max-w-3xl space-y-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Large Text with 3D effect */}
            <div className="mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-5"
                style={{ 
                  textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                  perspective: "1000px"
                }}
              >
                <motion.span 
                  initial={{ opacity: 0, x: -50, rotateX: 45 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-white transform-gpu"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  Your Gateway To
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: -50, rotateX: 45 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block transform-gpu"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 text-transparent bg-clip-text" 
                        style={{ filter: "drop-shadow(0 5px 15px rgba(59, 130, 246, 0.5))" }}>
                    Global Trade
                  </span>
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="block text-white transform-gpu"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  Excellence
                </motion.span>
              </motion.h1>
            </div>

            {/* Smaller Text with 3D effect */}
            <motion.h2 
              className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ 
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                perspective: "1000px"
              }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20, rotateX: 30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="block text-white transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                Streamlined
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20, rotateX: 30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="block transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 text-transparent bg-clip-text"
                      style={{ filter: "drop-shadow(0 5px 15px rgba(59, 130, 246, 0.5))" }}>
                  Customs Clearance
                </span>
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20, rotateX: 30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="block text-white transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                Solutions
              </motion.span>
            </motion.h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
            className="relative h-20"
          >
            <p 
              className="text-xl text-gray-100 absolute"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                borderRight: currentIndex < fullText.length ? '2px solid white' : 'none',
              }}
            >
              {displayText}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-none hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
                  style={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                >
                  <span>Our Services</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                  style={{ boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)" }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;