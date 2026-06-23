import React, { useState, useEffect } from 'react';

const Typewriter = ({ options }) => {
  const {
    strings = [],
    autoStart = true,
    loop = true,
    deleteSpeed = 50,
    delay = 70,
    cursor = '_',
  } = options || {};

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    let timer;
    const currentString = strings[currentIndex];

    if (isDeleting) {
      // Deleting character by character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
    } else {
      // Typing character by character
      timer = setTimeout(() => {
        setCurrentText((prev) => currentString.slice(0, prev.length + 1));
      }, delay);
    }

    // If fully typed, wait and switch to deleting
    if (!isDeleting && currentText === currentString) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500); // Pause before deleting
    }

    // If fully deleted, switch to next string
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, strings, delay, deleteSpeed]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
};

export default Typewriter;
