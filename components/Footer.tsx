'use client';
import Image from 'next/legacy/image';
const Footer = () => {
  return (
    <footer className="xl3:rounded-lg shadow bg-gray-900 h-50 min-h-50 max-h-50">
      <div className="w-full mx-auto p-4">
        <div className="justify-between sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-1xl font-semibold  text-slate-300">
              Every page needs a footer
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb.6 text-sm font-medium text-slate-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                How
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Are
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                You
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Today
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx:auto border-slate-700 lg:my-8" />
        <span className="text-sm text-center text-slate-400">
          <a className="block hover:underline text-center">Not Too Bad</a>
          <a className="block text-sm text-slate-400 text-center">© 2024</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
