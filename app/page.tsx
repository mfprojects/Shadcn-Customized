'use client';
import Image from 'next/image';

const src = 'https://cdn-icons-png.flaticon.com/512/15713/15713169.png';

export default function Home() {
  return (
    <div className="top-level-div h-screen text-dark">
      <div className="flex flex-col justify-between h-full">
        {/* Hero Section */}
        <section className="mx-auto flex flex-col justify-center text-center pb-4 pt-12 max-w-4xl">
          <h1 className="text-6xl lg:text-7xl font-montserrat text-center  text-primary animate-fade-in-down">
            <a className="underline decoration-accent">Com</a>
            <a className="underline decoration-accent">pLib</a>
          </h1>
          <div className="flex flex-col justify-center pt-3">
            <h2 className="font-montserrat text-4xl lg:text-4xl font-extralight text-primary">
              A stylized component library
            </h2>
          </div>
        </section>

        {/* Main Content Section */}
        <div className="h-full sm:flex sm:flex-col sm:text-center max-w-screen-xl mx-auto">
          <div className="mt-8">
            <a
              href="/customComponents/"
              className="drop-shadow-lg rounded-lg inline-flex backdrop-blur-md items-center justify-center px-6 py-3 my-6 bg-accent transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-accent hover:scale-110 duration-300"
            >
              <div className="flex flex-col items-center mx-auto md:min-w-96">
                <p className="text-xl text-dark font-montserrat font-semibold drop-shadow-2xl shadow-md bg-white bg-opacity-65 p-2 mt-2 mb-4 rounded">
                  Go to Components
                </p>
                <div className="md:w-40 md:h-40 flex content-center items-center mx-auto">
                  <Image
                    src={src}
                    alt="Go to Components Button"
                    width={118}
                    height={96}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
