import React from 'react';
import { TeamMember } from '../../types';
import AnimatedSection from '../ui/AnimatedSection';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <AnimatedSection delay={index * 100} animation="fade-up">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
        <div className="relative overflow-hidden h-64">
          <img 
            src={member.imageUrl} 
            alt={member.name}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity p-6">
            <p className="text-white text-sm">{member.bio}</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
          <p className="text-primary font-medium">{member.position}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TeamCard;