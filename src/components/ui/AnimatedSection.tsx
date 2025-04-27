import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-in': 'opacity-0',
    'slide-in-right': 'translate-x-10 opacity-0',
    'slide-in-left': 'translate-x-[-10px] opacity-0',
  };

  const baseStyles = 'transition-all duration-700 ease-out';
  const animationStyle = animations[animation];

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${
        isIntersecting
          ? 'translate-y-0 translate-x-0 opacity-100'
          : animationStyle
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;