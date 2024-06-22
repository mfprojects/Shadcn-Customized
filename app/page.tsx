import Image from 'next/image';
import Nav from '../components/Nav';
import UserForm from '../components/UserForm';

import PopOutHeading from '../components/PopOutHeading';

export default function Home() {
  return (
    <main className="p-0 lg:p-8 bg-mainColor">
      <Nav />
      <div className=" flex flex-col  shadow-indigo-500/50 shadow-custom-lg p-4">
        <section className=" pt-12 mt-4 sm:pt-12 sm:mt-6 md:pt-12 md:mt-4 lg:pt-0 lg:mt-2 pb-12 flex flex-col justify-center items-center text-center gap-8">
          <h1 className="text-h1custom  sm:text-6xl font-medium leading:10 lg:leading-12 w-full h-2/3 ">
            <a className="underline decoration-h1underline">Comp</a>
            <a className="underline decoration-blue-500">Lib</a>
          </h1>
        </section>

        <div className="flex flex-row flex-wrap justify-evenly content-center gap-4  ">
          <div className="flex-1 flex items-center justify-center p-4 rounded-lg bg-background-gradient-component">
            <h2 className="text-6xl px-4 bg-gradient-to-b from-indigo-100 to-indigo-500 bg-clip-text text-transparent p-3">
              Form Component with easy form handling
            </h2>
          </div>
          <div className="flex-1 items-center content-center p-4 rounded-lg bg-background-gradient-component">
            <UserForm />
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap gap-8 mb-16 mt-0">
          <div className="flex-grow flex-shrink-0 basis-full md:basis-1/3 min-h-[200px] flex items-center justify-center">
            <PopOutHeading>This changes size</PopOutHeading>
          </div>
          <div className="flex-grow flex-shrink-0 basis-full md:basis-1/3 min-h-[200px] flex items-center justify-center">
            <PopOutHeading>This one too</PopOutHeading>
          </div>
        </div>
      </div>
    </main>
  );
}
