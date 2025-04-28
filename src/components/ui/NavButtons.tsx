import React from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ to, label, isActive = false, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-teal-700 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </Link>
  );
};

interface NavButtonsProps {
  buttons: Array<{
    to: string;
    label: string;
    isActive?: boolean;
  }>;
  className?: string;
}

const NavButtons: React.FC<NavButtonsProps> = ({ buttons, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {buttons.map((button, index) => (
        <NavButton
          key={index}
          to={button.to}
          label={button.label}
          isActive={button.isActive}
        />
      ))}
    </div>
  );
};

export default NavButtons;