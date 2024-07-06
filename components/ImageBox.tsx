import Image from 'next/legacy/image';

export function ImageBox() {
  return (
    <div className="relative w-full h-96 sm:h-112 md:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1717501219345-06ea2bf3eb80?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample image"
        layout="fill"
        objectFit="cover"
        className=""
      />
    </div>
  );
}

export default ImageBox;
