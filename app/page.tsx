import Image from 'next/image';
import Nav from '../components/Nav';
import UserForm from '../components/UserForm';
import { Button } from '@/components/ui/button';
import PopOutHeading from '../components/PopOutHeading';

export default function Home() {
  return (
    <main className="p-0 lg:p-12 bg-background-gradient">
      <Nav />
      <div className=" flex flex-col  shadow-indigo-500/50 shadow-custom-lg divide-y divide-solid">
        <section className=" pt-12 mt-4 sm:pt-12 sm:mt-6 md:pt-12 md:mt-4 lg:pt-0 lg:mt-2 pb-12 flex flex-col justify-center items-center text-center gap-8 ">
          <h1 className="text-h1custom text-5xl sm:text-6xl font-medium leading:10 lg:leading-12 w-full h-2/3 ">
            <a className="underline decoration-h1underline">Comp</a>
            <a className="underline decoration-blue-500">Lib</a>
          </h1>
        </section>
        <div className="grid grid-row grid-cols-3 gap-4 p-4 drop-shadow-md items-center">
          <p className="col-span-3 lg:col-span-1 text-center lg:text-left px-8 text-lg sm:text-2xl leading-7 text-muted-foreground justify-center">
            Form Component with easy form handling
          </p>
          <div className="col-start-1 col-span-3 lg:col-start-2 lg:col-span-1 pb-6 flex-col items-center gap-8">
            <UserForm />
          </div>
          <div className="col-span-1 col-start-2 flex gap-6 items-center justify-center">
            <Button variant={'secondary'}>Learn more</Button>
            <Button className="bg-gradient-to-r from-sky-400 to-blue-500">
              Enroll Now
            </Button>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap gap-8 my-16">
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
