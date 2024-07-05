'use client';
import React, { useEffect, useRef, useState } from 'react';

const ArchiText: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 100 });
  const [fontSize, setFontSize] = useState(30);

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const width = svgRef.current.clientWidth;
        setDimensions({ width, height: 100 });
        setFontSize(Math.max(20, Math.min(32, width / 15)));
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const pathD = `M10,90 Q${dimensions.width / 2},10 ${
    dimensions.width - 10
  },90`;

  return (
    <section className="flex flex-col justify-center items-center text-center w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        width="100%"
        height="100"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#082043" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <path id="curve" d={pathD} fill="none" stroke="none" />
        <text
          style={{
            fill: 'url(#gradient)',
            fontSize: `${fontSize}px`,
            //fontSize: '1.5em',
            fontWeight: 'semi-bold',
          }}
        >
          <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
            Responsively designed
          </textPath>
        </text>
      </svg>
    </section>
  );
};

export default ArchiText;
