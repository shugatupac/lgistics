import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: 'default' | 'tall';
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=3270&auto=format&fit=crop",
  height = 'default'
}) => {
  // Import Poppins font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Track screen width for responsive font changes
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className={`relative ${height === 'tall' ? 'h-[50vh]' : 'h-[30vh]'} min-h-[300px] overflow-hidden bg-teal-800`}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-teal-900/70"></div>
      </div>

      <Container className="relative h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-16"
        >
          <h1 
            className="text-4xl md:text-5xl text-white font-bold mb-4" 
            style={{ 
              fontFamily: isMobile ? "Poppins, sans-serif" : "'Alpha Slab One', cursive"
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-lg max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </div>
  );
};

export default PageHero;