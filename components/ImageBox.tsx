import Image from 'next/legacy/image';
import React from 'react';

export interface ImageBoxProps {
  imgSrc: string;
}

const defaultProps: ImageBoxProps = {
  imgSrc:
    'https://images.unsplash.com/photo-1717501219345-06ea2bf3eb80?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const ImageBox: React.FC<ImageBoxProps> = (imgProps) => {
  const { imgSrc } = { ...defaultProps, ...imgProps };

  return (
    <div className="lg:flex lg:flex-row min-h-screen justify-start top-2/4 mx-4 pt-8">
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[1000px] xl:h-1000">
        <Image
          className="shadow-2xl  object-fill w-full h-0 sm:object-fill md:object-top lg:object-contain xl:object-contain transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 rounded-xl"
          src={imgSrc}
          alt="Sample image"
          layout="fill"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ImageBox;
