'use client';
import { useState } from 'react';
import ArchiText from '@/components/ArchiText';
import UserForm from '../../components/UserForm';
import { CarouselDApiDemo } from '@/components/CarouselApiDemo';
import Image from 'next/legacy/image';

const components = {
  Carousel: CarouselDApiDemo,
  UserForm: UserForm,
  ImageBox: () => (
    <div className="relative w-full h-96 sm:h-112 md:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1717501219345-06ea2bf3eb80?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample image"
        layout="fill"
        objectFit="cover"
        className=""
      />
    </div>
  ),
};

type ComponentKey = keyof typeof components;

export default function CustomComponents() {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey>('ImageBox');
  const ComponentToRender = components[selectedComponent];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col lg:flex-row">
        <div className="lg:w-52 lg:min-h-screen lg:bg-[#0F234C] lg:p-4">
          <div className="lg:sticky lg:top-2">
            <div className="hidden lg:block divide-y divide-dashed divide-gray-600">
              <h2 className="text-xl font-medium text-white mb-4">
                Choose component to display
              </h2>
              <ul className="space-y-2 pt-4">
                {Object.keys(components).map((componentName) => (
                  <li key={componentName}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded ${
                        selectedComponent === componentName
                          ? 'bg-color30 text-white'
                          : 'text-gray-300 hover:bg-color30/50'
                      }`}
                      onClick={() =>
                        setSelectedComponent(componentName as ComponentKey)
                      }
                    >
                      {componentName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow px-2 py-2">
          <div className="max-w-screen-xl mx-auto">
            <ArchiText />
            <div className="flex flex-col justify-center items-center text-center w-full mb-1 lg:mb-0">
              <h1 className="subpixel-antialiased flex-auto text-5xl font-bold text-wrap text-center lg:text-center bg-clip-text text-transparent bg-gradient-to-r from-color60 to-color10 animate-fade-in-down w-fit px-4 mb-8 relative">
                Component Collection
                <span className="absolute -bottom-1 left-0 right-0 mx-auto h-1 bg-gradient-to-r from-color60 to-color30"></span>
              </h1>
            </div>

            <div className="lg:hidden bg-[#0F234C] p-4 rounded-lg mb-8 divide-y divide-dashed divide-gray-600 border-2 border-color30">
              <h2 className="divide-y-4 text-xl font-medium text-wrap text-white mb-4">
                Choose component
              </h2>
              <ul className="space-y-2 pt-4">
                {Object.keys(components).map((componentName) => (
                  <li key={componentName}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded ${
                        selectedComponent === componentName
                          ? 'bg-color10 text-white'
                          : 'text-gray-300 hover:bg-color10/50'
                      }`}
                      onClick={() =>
                        setSelectedComponent(componentName as ComponentKey)
                      }
                    >
                      {componentName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full rounded-lg shadow-highlight2 bg-[#0F234C] border-2 border-color30 overflow-hidden p-4">
              <ComponentToRender />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
