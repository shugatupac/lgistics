import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Simplify Your Customs Clearance Process?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-lg">
                Partner with Aviance Clearing for expert customs solutions that save you time, 
                reduce costs, and eliminate the stress of international shipping logistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 group"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6">Request a Free Consultation</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="" className="text-gray-800">Select Service</option>
                    <option value="customs" className="text-gray-800">Customs Clearance</option>
                    <option value="freight" className="text-gray-800">Freight Forwarding</option>
                    <option value="warehousing" className="text-gray-800">Warehousing</option>
                    <option value="supply" className="text-gray-800">Supply Chain Solutions</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your needs"
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  ></textarea>
                </div>
                <div>
                  <Button variant="secondary" size="lg" className="w-full bg-white text-primary hover:bg-gray-100">
                    Submit Request
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;