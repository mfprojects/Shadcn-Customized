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
    <main className="flex flex-col min-h-screen w-screen max-w-screen-2xl px-0 sm:px-4 py-2  xs:p-4 mx-auto bg-indigo-100">
      <Nav />
      <section className=" pt-4 pb-6 mt-4 sm:pt-4 sm:mt-6 md:pt-4 md:mt-4 lg:mt-2 flex flex-col justify-center items-center text-center gap-8 bg-gradient-to-b from-[#0a2855] from-10% to-[#051937] to-100% rounded-t-lg ">
        <h1 className="bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent text-6xl sm:text-6xl font-medium leading:loose lg:leading-loose ">
          <a className="underline decoration-h1underline">Com</a>
          <a className="underline decoration-blue-500">pLib</a>
        </h1>
      </section>
      <div className="flex flex-col min-h-fit w-full justify-center md:justify-center bg-gradient-to-b from-[#0a2855] from-10% to-[#051937] to-100% shadow-indigo-500/50 shadow-custom-lg p-4">
        <div className=" flex flex-wrap justify-center content-center gap-4 sm:gap-4 pt-12 pb-12">
          <div className="flex-1 sm:flex-1 flex flex-col items-start sm:justify-center rounded-lg bg-background-gradient-component-small sm:bg-background-gradient-component">
            <h2 className="text-3xl text-center self-center pb-8 bg-clip-text text-transparent py-3 bg-gradient-to-b from-indigo-100 to-indigo-500 ">
              Content Carousel
            </h2>
            <div className="flex justify-center items-center min-h-96 w-full gap-4 pb-8 xsplus:py-8 sm:pb-8">
              <CarouselDApiDemo />
            </div>
            <div className="flex-1 flex justify-center items-end w-full gap-4 pb-8 xsplus:py-8 sm:pb-8">
              <Button
                size="lg"
                className="shadow-md shadow-slate-300/50 bg-gradient-to-tr from-slate-300 to-slate-500  "
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className="flex-1 flex-col content-center justify-between rounded-lg bg-background-gradient-component-reverse-small sm:bg-background-gradient-component-reverse">
            <h2 className="text-3xl text-center px-4 bg-clip-text text-transparent p-3 bg-gradient-to-b from-indigo-100 to-indigo-500 ">
              Form Component with easy handling
            </h2>
            <UserForm />
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
