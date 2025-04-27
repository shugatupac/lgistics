import React from 'react';
import Container from '../components/ui/Container';
import TeamCard from '../components/about/TeamCard';
import { teamMembers } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-primary py-16">
        <Container>
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Learn about our mission, history, and the team that makes Aviance 
              the leading customs clearing agent.
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2005, Aviance Clearing has grown from a small team of customs experts to a 
              comprehensive logistics solution provider. Our journey began with a simple mission: to remove 
              the complexity from international trade by providing excellent customs clearance services.
            </p>
            <p className="text-gray-600 mb-6">
              Over the years, we've expanded our services to include freight forwarding, warehousing, 
              and complete supply chain solutions while maintaining our core focus on efficient customs processing. 
              Our deep expertise in international trade regulations and commitment to client service has made 
              us the trusted partner for businesses of all sizes.
            </p>
            <p className="text-gray-600">
              Today, we serve hundreds of clients across multiple industries, helping them navigate the 
              complexities of global trade with confidence and ease.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <img 
              src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cargo ship in port" 
              className="rounded-lg shadow-lg"
            />
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Excellence',
              description: 'We strive for excellence in every aspect of our service, from documentation to delivery.',
              icon: '🏆',
            },
            {
              title: 'Integrity',
              description: 'We operate with complete transparency and honesty in all our business dealings.',
              icon: '⚖️',
            },
            {
              title: 'Innovation',
              description: 'We continuously improve our processes and embrace new technologies to serve you better.',
              icon: '💡',
            },
          ].map((value, index) => (
            <AnimatedSection key={index} delay={index * 100} animation="fade-up">
              <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm text-center h-full">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Our experienced professionals are dedicated to providing exceptional service
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;