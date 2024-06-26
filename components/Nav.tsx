'use client';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import ArchiText from './ArchiText';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="py-4 px-8 bg-gradient-to-b from-[#0a2855] from-10% to-[#051937] to-100%  shadow-navColorLight/50 shadow-md">
        <div className="flex flex-wrap items-center justify-between">
          <section className="flex items-center justify-center text-center">
            <h1 className="bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent text-2xl subpixel-antialiased font-light">
              <a className="underline decoration-h1underline">Com</a>
              <a className="underline decoration-blue-500">pLib</a>
            </h1>
          </section>

          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
              <li>
                <Link
                  href="/"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/customComponents"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
