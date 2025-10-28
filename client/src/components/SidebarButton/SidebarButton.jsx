import React from 'react';
import { Link } from 'react-router-dom';

const SidebarButton = ({ to, icon, text, isActive }) => {
  return (
    <Link
      to={to}
      style={{ color: isActive ? 'white' : 'white' }}
      className={`flex items-center px-4 py-3 my-1 rounded-lg shadow transition-colors duration-300 
    ${isActive ? 'bg-orange-500' : 'bg-gray-600 hover:bg-amber-700'}
  `}
    >
      <span className="mr-3 text-xl">{icon}</span>
      <span>{text}</span>
    </Link>




  );
};

export default SidebarButton;