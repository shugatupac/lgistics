import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Truck, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import NavButtons from '../ui/NavButtons';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Home', isActive: location.pathname === '/' },
    { to: '/about', label: 'About', isActive: location.pathname === '/about' },
    { to: '/logistics-services', label: 'Logistics Services', isActive: location.pathname === '/logistics-services' },
    { to: '/contact', label: 'Contact', isActive: location.pathname === '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-teal-900/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Truck className={`h-10 w-10 mr-2 ${scrolled ? 'text-teal-700' : 'text-white'}`} />
              <span 
                className={`text-2xl font-bold ${scrolled ? 'text-teal-700' : 'text-white'}`}
                style={{ fontFamily: "'Alpha Slab One', cursive" }}
              >
                Overnight Logistics
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavButtons buttons={navItems} />
            
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2 bg-lime-300 text-teal-900 font-medium rounded-full hover:bg-lime-400 transition-colors shadow-md"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-gray-800 hover:text-teal-700' : 'text-white hover:text-lime-300'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 inset-x-0 bg-teal-900 min-h-screen p-4">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Truck className="h-10 w-10 text-white mr-2" />
              <span 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Alpha Slab One', cursive" }}
              >
                Overnight Logistics
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-lime-300 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="space-y-4">
            <NavButtons 
              buttons={navItems.map(item => ({
                ...item, 
                onClick: () => setIsMenuOpen(false)
              }))} 
              className="flex flex-col space-y-3"
            />
            
            <div className="pt-6">
              <Link 
                to="/contact" 
                className="block w-full px-6 py-3 bg-lime-300 text-teal-900 font-medium rounded-full hover:bg-lime-400 transition-colors shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;