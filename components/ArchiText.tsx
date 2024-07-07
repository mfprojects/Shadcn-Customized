import React from 'react';

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
  width: 6000,
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

  // Increase the effect of bendDegree
  const adjustedBendDegree = bendDegree * 5; // Amplify the bend degree for a stronger curve
  const pathD = `M10,${height / 2} Q${width / 2},${adjustedBendDegree} ${
    width - 10
  },${height / 2}`;

  const padding = 20; // Adjust padding as needed

  return (
    <div className="flex flex-col justify-center items-center text-center w-full max-h-full overflow-hidden">
      <div className="justify-center">
        <svg
          viewBox={`0 0 ${width} ${height + Math.abs(adjustedBendDegree) * 2}`}
          width="100%"
          height={height + Math.abs(adjustedBendDegree) * 2}
          preserveAspectRatio="xMidYMid meet"
          style={{ padding: `0 ${padding}px` }}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>
          </defs>
          <path id="curve" d={pathD} fill="none" stroke="none" />
          <text fill={fontColor} fontSize={`${fontSize}px`} fontWeight="600">
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
