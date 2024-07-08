import React, { useEffect, useState } from 'react';

export interface ArchiTextProps {
  text: string;
  fontSize: number;
  fontColor: string;
  gradientStart: string;
  gradientEnd: string;
  width: number;
  height: number;
  bendDegree: number;
}

const defaultProps: ArchiTextProps = {
  text: 'Responsively designed',
  fontSize: 24,
  fontColor: 'url(#gradient)',
  gradientStart: '#cae9fb',
  gradientEnd: '#38B5F8',
  width: 600,
  height: 100,
  bendDegree: 30,
};

const ArchiText: React.FC<ArchiTextProps> = (props) => {
  const {
    text,
    fontSize,
    fontColor,
    gradientStart,
    gradientEnd,
    width,
    height,
    bendDegree = 30,
  } = { ...defaultProps, ...props };

  const [adjustedFontSize, setAdjustedFontSize] = useState(fontSize);
  const [svgDimensions, setSvgDimensions] = useState({ width, height });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const adjustedWidth = Math.min(screenWidth - 20, width); // Adjust width to be within the screen width with some padding
      const adjustedHeight = height + Math.abs(bendDegree * 5) * 2;
      const newFontSize = Math.max(fontSize * (adjustedWidth / width), 26); // Ensure a minimum font size

      setAdjustedFontSize(newFontSize);
      setSvgDimensions({ width: adjustedWidth, height: adjustedHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set sizes

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [fontSize, width, height, bendDegree]);

  const pathD = `M10,${height / 2} Q${svgDimensions.width / 2},${
    bendDegree * 5
  } ${svgDimensions.width - 10},${height / 2}`;

  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-4 overflow-hidden my-auto">
      <div className="w-full object-contain flex justify-center overflow-hidden">
        <svg
          viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
          width="50%"
          height="50%"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>
          </defs>
          <path id="curve" d={pathD} fill="none" stroke="none" />
          <text
            fill={fontColor}
            fontSize={`${adjustedFontSize}px`}
            fontWeight="600"
          >
            <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ArchiText;
