'use client';
import ArchiText from '@/components/ArchiText';
import UserForm from '../../components/UserForm';
import { CarouselDApiDemo } from '@/components/CarouselApiDemo';
import Image from "next/legacy/image";
import { Card } from '@/components/ui/card';

export default function CustomComponents() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-[#0a2855] from-10% to-[#051937]">
      <div className="flex-grow flex flex-col max-w-screen-3xl w-full mx-auto bg-gradient-to-t from-[#0a2855] from-10% to-[#051937] to-100% p-4">
        <section className="pt-8">
          <ArchiText />
        </section>
        <div className="relative mb-8">
          <h1 className="subpixel-antialiased flex-auto pt-8 pb-3 text-5xl font-bold text-wrap text-center bg-clip-text text-transparent bg-gradient-to-r from-h1underline to-purple-600 animate-fade-in-down mx-auto w-fit px-4">
            Component Collection
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-h1underline to-purple-600"></span>
          </h1>
        </div>
        <div className="max-w-screen-3xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2 pb-12 sm:px-4">
            <div className="w-full h-full">
              <div className="flex-1 flex flex-col items-center sm:justify-center rounded-lg bg-background-gradient-component shadow-highlight2 border-2 border-borderColor h-full">
                <div className="flex justify-center items-center min-h-96 w-full gap-4 pb-8">
                  <CarouselDApiDemo />
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="rounded-lg w-full h-full shadow-highlight2 bg-background-gradient-component border-2 border-borderColor overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                  <div className="lg:col-span-4 h-full">
                    <div className="h-40 lg:h-full relative">
                      <Image
                        className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none opacity-70 object-cover"
                        alt="none"
                        src="https://images.unsplash.com/photo-1719256060810-7375d89eea01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-8 flex items-center justify-center">
                    <UserForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 w-full h-96 shadow-highlight2 bg-background-gradient-component border-2 border-borderColor overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  className="rounded-lg opacity-20"
                  alt="aside"
                  src="https://images.unsplash.com/photo-1719256060810-7375d89eea01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
