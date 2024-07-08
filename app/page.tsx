'use client';
import { CarouselDApiDemo } from '@/components/CarouselApiDemo';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="top-level-div Flex flex-col min-h-screen">
      <div className="flex flex-col">
        <div className="flex-grow">
          <CarouselDApiDemo/>
          {/* Hero Section */}
          <section className=" mx-auto flex flex-col justify-center text-center pb-4 pt-12 max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-montserrat text-center bg-clip-text text-transparent  bg-gradient-to-r from-[#D19757] from-10% to-orange-500 to-100%  animate-fade-in-down">
              <a className="underline decoration-color10">Com</a>
              <a className="underline decoration-color30">pLib</a>
            </h1>
          </section>

          {/* Main Content Section */}
          <div className=" flex flex-col justify-center text-center pb-4 pt-12 ">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row">
                <div className="flex-1 grid grid-cols-1 gap-4">
                  <div className="flex flex-col justify-center">
                    <h2 className="font-inter text-2xl md:text-3xl lg:text-3xl font-extralight text-textColor2">
                      A stylized component library
                    </h2>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="/customComponents/"
                      className="inline-flex items-center justify-center px-6 py-3 my-6 text-base md:text-lg lg:text-xl font-semibold text-center bg-[#4A9DF3] text-color60 rounded-lg hover:bg-color10/100 focus:ring-color60/50 transition-colors"
                    >
                      <svg
                        className="w-12 h-8 md:h-10 lg:w-12 text-gray-900"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 7h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C10.4 2.842 8.949 2 7.5 2A3.5 3.5 0 0 0 4 5.5c.003.52.123 1.033.351 1.5H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2Zm-9.942 0H7.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM13 14h-2v8h2v-8Zm-4 0H4v6a2 2 0 0 0 2 2h3v-8Zm6 0v8h3a2 2 0 0 0 2-2v-6h-5Z" />
                      </svg>
                      Go to Components
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grid col-span-4 gap-4 my-8 justify-center items-center"></div>
    </div>
  );
}
