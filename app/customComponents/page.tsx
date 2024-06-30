import ArchiText from '@/components/ArchiText';
import UserForm from '../../components/UserForm';
import { CarouselDApiDemo } from '@/components/CarouselApiDemo';
import { TabsDemo } from '@/components/Tabs';

export default function CustomComponents() {
  return (
    <div className="flex flex-col w-full max-w-screen-3xl px-0 mx-auto bg-indigo-100">
      <div className="flex-grow flex flex-col w-full  bg-gradient-to-t from-[#0a2855] from-10% to-[#051937] to-100% shadow-indigo-500/50 shadow-custom-lg p-4">
        <section className="justify-center items-center text-center">
          <ArchiText />
        </section>
        <div className="relative mb-8">
          <h1 className="subpixel-antialiased flex-auto pt-8 pb-3 text-5xl font-bold text-wrap text-center bg-clip-text text-transparent bg-gradient-to-r from-h1underline to-purple-600 animate-fade-in-down mx-auto w-fit px-4">
            Component Collection
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-h1underline to-purple-600"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-2 pb-12 sm:px-4">
          <div className="space-y-4 ">
            <div className="flex-1 flex flex-col items-center sm:justify-center rounded-lg bg-background-gradient-component shadow-highlight2 border-2 border-borderColor">
              <div className="flex justify-center items-center min-h-96 w-full gap-4 pb-8">
                <CarouselDApiDemo />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex-1 min-w-80 rounded-lg shadow-highlight2 bg-background-gradient-component border-2 border-borderColor">
              <div className="flex justify-center items-center min-h-96 w-full gap-4">
                <UserForm />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex-1 min-w-80 rounded-lg shadow-highlight2 bg-background-gradient-component border-2 border-borderColor">
              <div className="flex justify-center items-center min-h-96 w-full gap-4">
                <TabsDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 <h2 className="mt-5 -mb-3 text-base text-left xl:text-center font-medium leading-7 text-indigo-300 opacity-80 hover:opacity-100">
  Image Carousel
</h2>

<h2 className="mt-5 -mb-3 text-base text-left xl:text-center font-medium leading-7 text-indigo-300 opacity-80 hover:opacity-100">
  Registration Form
</h2>

 */
