import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="card-container p-4 bg-white shadow-md rounded-md">
    {children}
  </div>
);

export default Card;
