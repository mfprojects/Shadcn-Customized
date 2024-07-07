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
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-b from-[#0a2855] from-10% to-[#051937] to-100% shadow-navColorLight/50 shadow-md">
        <div className="max-w-screen-3xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/">
              <h1 className="bg-gradient-to-r from-[#F7DBB5] to-[#FBB57C] bg-clip-text text-transparent text-2xl subpixel-antialiased font-light">
                <span className="underline decoration-h1underline">Com</span>
                <span className="underline decoration-blue-500">pLib</span>
              </h1>
            </a>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-textColor2 hover:bg-color10/70 px-3 py-2 rounded-md"
                >
                  Home
                </Link>
                <Link
                  href="/customComponents"
                  className="text-textColor2 hover:bg-color10/70 px-3 py-2 rounded-md"
                >
                  Components
                </Link>
                <Link
                  href="/about"
                  className="text-textColor2 hover:bg-color10/70 px-3 py-2 rounded-md"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white opacity-100 border-borderColor hover:opacity-65 pl-2 pt-2 transition-all duration-300"
              >
                <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-3xl bg-transparent p-2">
                  <div className="space-y-2">
                    <span className="block h-1 w-10 origin-center rounded-full bg-[#43547f] transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                    <span className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                  </div>
                </div>
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
        className={`fixed top-16 left-0 right-0 bottom-o bg-[#051937] transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } lg:hidden overflow-y-auto`}
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
