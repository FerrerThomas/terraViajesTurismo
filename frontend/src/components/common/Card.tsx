import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;