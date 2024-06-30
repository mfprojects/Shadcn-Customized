import Image from 'next/image';
import Nav from '../components/Nav';
import UserForm from '../components/UserForm';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CarouselBox } from '@/components/CarouselBox';

import PopOutHeading from '../components/PopOutHeading';
import { CarouselDApiDemo } from '@/components/CarouselApiDemo';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen max-w-screen-3xl px-0 xl:px-4 py-2 mx-auto bg-indigo-100">
      <Nav />
      <div className="flex-grow flex flex-col w-full xl:rounded-lg bg-gradient-to-t from-[#0a2855] from-10% to-[#051937] to-100% shadow-indigo-500/50 shadow-custom-lg p-4">
        <div className="relative xl:mt-10 mb-2 xl:mb-12 ">
          <h1 className="flex-auto pt-8 text-5xl font-bold text-wrap text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-fade-in-down">
            Components
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-purple-600"></span>
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pt-12 pb-12 sm:px-4">
          <div className="space-y-4 ">
            <h2 className="mt-5 -mb-3 text-base text-left xl:text-center font-medium leading-7 text-indigo-300 opacity-80 hover:opacity-100">
              Image Carousel
            </h2>
            <div className="flex-1 flex flex-col items-center sm:justify-center rounded-lg bg-background-gradient-component shadow-highlight2 border-2 border-borderColor">
              <div className="flex justify-center items-center min-h-96 w-full gap-4 pb-8">
                <CarouselDApiDemo />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="mt-5 -mb-3 text-base text-left xl:text-center font-medium leading-7 text-indigo-300 opacity-80 hover:opacity-100">
              Registration Form
            </h2>
            <div className="flex-1 min-w-80 rounded-lg shadow-highlight2 bg-background-gradient-component border-2 border-borderColor">
              <div className="flex justify-center items-center min-h-96 w-full gap-4">
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
/*
<div className="flex justify-evenly flex-wrap gap-8 mb-16 mt-0 collapse">
<div className="flex-grow flex-shrink-0 basis-full md:basis-1/3 min-h-[200px] flex items-center justify-center">
  <PopOutHeading>This changes size</PopOutHeading>
</div>
<div className="flex-grow flex-shrink-0 basis-full md:basis-1/3 min-h-[200px] flex items-center justify-center">
  <PopOutHeading>This one too</PopOutHeading>
</div>
</div>
<div className="flex justify-evenly flex-wrap gap-8 mb-16 mt-0 collapse">
<div className="flex-grow flex-shrink-0 basis-full md:basis-1/3 min-h-[200px] flex items-center justify-center">
  <PopOutHeading>This changes size</PopOutHeading>
</div>
<div className="flex-grow flex-shrink-0 basis-full md:basis-1/3 min-h-[200px] flex items-center justify-center">
  <PopOutHeading>This one too</PopOutHeading>
</div>
</div>
*/
