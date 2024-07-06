import React, { useEffect, useRef, useState } from 'react';
import { string } from 'zod';

export interface ArchiTextProps {
  text?: string;
  fontSize?: number;
  fontColor?: string;
  gradientStart?: string;
  gradientEnd?: string;
  width?: number;
  height?: number;
}

const ArchiText: React.FC<ArchiTextProps> = ({
  text = 'Responsively designed',
  fontColor = 'url(#gradient)',
  gradientStart = '#082043',
  gradientEnd = '#A855F7',
  width = 500,
  height = 100,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width, height });
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
  }, [height]); //kanskje være blank?

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
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
          </linearGradient>
        </defs>
        <path id="curve" d={pathD} fill="none" stroke="none" />
        <text
          style={{
            fill: fontColor,
            fontSize: `${fontSize}px`,
            //fontSize: '1.5em',
            fontWeight: 'semi-bold',
          }}
        >
          <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </section>
  );
};

export default ArchiText;
