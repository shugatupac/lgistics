import React from 'react';
import Container from '../components/ui/Container';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import { Truck, Award, Users, Globe, TrendingUp, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      <PageHero 
        title="About Overnight Logistics" 
        subtitle="Your trusted partner in global logistics and customs clearance solutions"
        backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
        height="tall"
      />

      <Container className="py-16">
        {/* Company Overview */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Overnight Logistics has grown from a small regional operation to a global 
                leader in logistics and customs clearance solutions. Our journey began with a simple mission: 
                to make international shipping accessible, transparent, and efficient for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve thousands of clients worldwide, leveraging our expertise, technology, and 
                global network to provide seamless logistics solutions. Our team of experts works tirelessly 
                to ensure your goods move across borders smoothly and efficiently.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2070&auto=format&fit=crop" 
                  alt="Overnight Logistics headquarters" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-700 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-xl mb-2">12+ Years</p>
                <p className="text-white/90">Of excellence in global logistics solutions</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our operations and relationships with clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Shield className="h-8 w-8 text-teal-700" />,
                title: "Reliability",
                description: "We deliver on our promises, ensuring your shipments arrive safely and on time, every time."
              },
              {
                icon: <Award className="h-8 w-8 text-teal-700" />,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, from customer support to logistics execution."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-teal-700" />,
                title: "Innovation",
                description: "We continuously invest in technology and processes to improve efficiency and service quality."
              },
              {
                icon: <Globe className="h-8 w-8 text-teal-700" />,
                title: "Global Perspective",
                description: "Our worldwide network and local expertise ensure seamless operations across borders."
              },
              {
                icon: <Users className="h-8 w-8 text-teal-700" />,
                title: "Customer Focus",
                description: "We build lasting relationships by understanding and exceeding our clients' expectations."
              },
              {
                icon: <Truck className="h-8 w-8 text-teal-700" />,
                title: "Sustainability",
                description: "We're committed to environmentally responsible logistics practices and reducing our carbon footprint."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-teal-700 to-teal-900 rounded-2xl p-10 shadow-xl mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "5,000+", label: "Clients Worldwide" },
                { number: "120+", label: "Countries Served" },
                { number: "250,000+", label: "Shipments Annually" },
                { number: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-lime-300 mb-2">{stat.number}</p>
                  <p className="text-white text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Team */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experienced professionals guiding our company's vision and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
                bio: "With over 20 years in logistics, Sarah has led Overnight Logistics to become an industry leader through strategic vision and operational excellence."
              },
              {
                name: "Michael Chen",
                position: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
                bio: "Michael oversees our global operations, ensuring efficient processes and exceptional service delivery across all regions."
              },
              {
                name: "Elena Rodriguez",
                position: "VP of Global Customs",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
                bio: "Elena's expertise in international trade regulations has been instrumental in developing our comprehensive customs clearance solutions."
              },
              {
                name: "David Williams",
                position: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
                bio: "David leads our digital transformation initiatives, implementing cutting-edge technologies to enhance our logistics operations and customer experience."
              },
              {
                name: "Sophia Patel",
                position: "VP of Customer Success",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
                bio: "Sophia ensures our clients receive exceptional service and support, building long-term partnerships that drive mutual success."
              },
              {
                name: "James Wilson",
                position: "Global Logistics Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
                bio: "James coordinates our worldwide shipping operations, optimizing routes and ensuring timely delivery across our global network."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-700 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
};

export default About;