// src/components/FilterButton.jsx
import React from 'react';

const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
        active 
          ? 'bg-indigo-600 text-white dark:bg-indigo-500'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
      }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;