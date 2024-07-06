'use client';
export default function Home() {
  return (
    <div className="flex flex-col mb-12 px-2">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="mx-auto flex flex-col justify-center text-center pb-12 pt-12 max-w-4xl">
          <h1 className="text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-color60 to-color10 animate-fade-in-down">
            <a className="underline decoration-color10">Com</a>
            <a className="underline decoration-color30">pLib</a>
          </h1>
        </section>

        {/* Main Content Section */}
        <section className="lg:max-w-5xl mx-auto flex flex-col items-center justify-center text-center rounded-lg bg-color60 p-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-semibold text-textColor">
              A stylized component library
            </h2>
            <p className="mb-6 text-sm md:text-md lg:text-lg text-textColor/70">
              Free to use and under constant development
            </p>
            <a
              href="/customComponents/"
              className="inline-flex items-center justify-center px-6 py-3 my-6 text-base md:text-lg lg:text-xl font-semibold text-center bg-color10/80 text-color60 rounded-lg hover:bg-color10/100 focus:ring-color60/50 transition-colors"
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
        </section>
      </div>
    </div>
  );
}
