import Image from 'next/image';
import Nav from '../components/Nav';
import UserForm from '../components/UserForm';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

import PopOutHeading from '../components/PopOutHeading';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-0 sm:px-4 sm:pt-4 bg-mainColor">
      <Nav />
      <div className="flex flex-col justify-evenly min-h-screen shadow-indigo-500/50 shadow-custom-lg p-4">
        <section className=" pt-4 mt-4 sm:pt-0 sm:mt-6 md:pt-0 md:mt-4 lg:mt-2 pb-12 flex flex-col justify-center items-center text-center gap-8">
          <h1 className="bg-gradient-to-b from-indigo-100 to-indigo-400 bg-clip-text text-transparent text-6xl sm:text-6xl font-medium leading:10 lg:leading-normal ">
            <a className="underline decoration-h1underline">Comp</a>
            <a className="underline decoration-blue-500">Lib</a>
          </h1>
        </section>

        <div className=" flex flex-wrap justify-evenly content-center gap-4 sm:gap-4 pt-12 mt-4  ">
          <div className="flex-0 w-full sm:w-auto sm:flex-1 flex flex-col items-start sm:justify-center p-4 px-4 rounded-lg bg-background-gradient-component-small sm:bg-background-gradient-component">
            <h2 className="text-3xl text-center self-center pb-8 bg-clip-text text-transparent py-3 bg-gradient-to-b from-indigo-100 to-indigo-500 ">
              Useful Popups
            </h2>

            <div className="flex-1 flex justify-center items-end w-full gap-4 pb-8 xsplus:py-8 sm:pb-8">
              <Button
                size="lg"
                className="shadow-lg shadow-slate-300/50 bg-gradient-to-tr from-slate-300 to-slate-500  "
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex-1 flex-col items-end content-center p-4 rounded-lg bg-background-gradient-component-reverse-small sm:bg-background-gradient-component-reverse">
            <h2 className="text-3xl text-center self-center px-4 bg-clip-text text-transparent p-3 bg-gradient-to-b from-indigo-100 to-indigo-500 ">
              Form Component with easy handling
            </h2>
            <UserForm />
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
        <div className="flex justify-evenly flex-wrap gap-8 mb-16 mt-0 collapse">
          <div className="flex-grow flex-shrink-0 basis-full md:basis-1/3 min-h-[200px] flex items-center justify-center">
            <PopOutHeading>This changes size</PopOutHeading>
          </div>
          <div className="flex-grow flex-shrink-0 basis-full md:basis-1/3 min-h-[200px] flex items-center justify-center">
            <PopOutHeading>This one too</PopOutHeading>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
