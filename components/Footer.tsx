'use client';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="rounded-lg shadow bg-gray-900 mt-12 mb-4  static">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
              width={30}
              height={100}
            />
            <span className="self-center text-2xl font-semibold  text-slate-300">
              Flowbite
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb.6 text-sm font-medium sm:mb-0 text-slate-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx:auto border-slate-700 lg:my-8" />
        <span className="text-sm text-center text-slate-400">
          <a className="block text-sm text-slate-400 text-center">© 2024</a>
          <a href="https://flowbite.com/" className="hover:underline"></a>
          <a className="block hover:underline text-center">
            Based on Flowbite design, not too bad
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
