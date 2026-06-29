// src/components/FilterButton.jsx
import React from 'react';

const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer font-mono border ${
        active 
          ? 'bg-indigo-600 border-indigo-600 text-white dark:bg-cyber-cyan/15 dark:border-cyber-cyan dark:text-cyber-cyan dark:shadow-[0_0_15px_rgba(0,242,254,0.3)]'
          : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-550 dark:bg-cyber-dark dark:border-cyber-border-dark dark:text-gray-400 dark:hover:border-cyber-cyan dark:hover:text-cyber-cyan'
      }`}
    >
      [{label}]
    </button>
  );
};

export default FilterButton;