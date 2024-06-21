'use client';

import React, { useState, useEffect } from 'react';

interface PopOutHeadingProps {
  children: React.ReactNode;
}

const PopOutHeading: React.FC<PopOutHeadingProps> = ({ children }) => {
  const [scrollDir, setScrollDir] = useState('down');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      setScrollY(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDir);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <h1
      className={`
        font-small text-wrap text-center leading-10 lg:leading-12
        transition-all duration-300 ease-out
 ${scrollDir === 'up' ? 'text-4xl ' : 'text-3xl '}
        ${scrollY > 100 ? 'opacity-90' : 'opacity-100'}
      `}
    >
      {children}
    </h1>
  );
};

export default PopOutHeading;
