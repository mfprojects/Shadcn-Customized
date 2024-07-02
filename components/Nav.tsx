'use client';
import * as React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50">
      <nav className="bg-gradient-to-b from-[#0a2855] from-10% to-[#051937] to-100% shadow-navColorLight/50 shadow-md">
        <div className="max-w-screen-3xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/">
              <h1 className="bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent text-2xl subpixel-antialiased font-light">
                <span className="underline decoration-h1underline">Com</span>
                <span className="underline decoration-blue-500">pLib</span>
              </h1>
            </a>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-color10 hover:bg-color10 px-3 py-2 rounded-md"
                >
                  Home
                </Link>
                <Link
                  href="/customComponents"
                  className="text-color10 hover:bg-color10 px-3 py-2 rounded-md"
                >
                  Components
                </Link>
                <Link
                  href="/about"
                  className="text-color10 hover:bg-color10 px-3 py-2 rounded-md"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white opacity-100 border-borderColor hover:opacity-65  pl-2 pt-2 transition-all duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile menu, absolute positioned */}
      <div
        className={`absolute top-16 left-0 right-0 bg-[#051937] transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } lg:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-white block px-3 py-2 rounded-md hover:bg-indigo-400"
          >
            Home
          </Link>
          <Link
            href="/customComponents"
            className="text-white block px-3 py-2 rounded-md hover:bg-indigo-400"
          >
            Components
          </Link>
          <Link
            href="/about"
            className="text-white block px-3 py-2 rounded-md hover:bg-indigo-400"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
