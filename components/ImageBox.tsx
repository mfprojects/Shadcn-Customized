import Image from 'next/legacy/image';
import React from 'react';

export interface ImageBoxProps {
  imgSrc: string;
  width: number;
  height: number;
}

const defaultProps: ImageBoxProps = {
  imgSrc:
    'https://images.unsplash.com/photo-1717501219345-06ea2bf3eb80?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  width: 400,
  height: 400,
};

const ImageBox: React.FC<ImageBoxProps> = (imgProps) => {
  const { imgSrc, width, height } = { ...defaultProps, ...imgProps };

  return (
    <div className="relative w-full h-96 sm:h-112 md:h-[700px]">
      <Image
        className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
        src={imgSrc}
        alt="Sample image"
        layout="fill"
        width={width}
        height={height}
        objectFit="cover"
      />
    </div>
  );
};

export default ImageBox;
