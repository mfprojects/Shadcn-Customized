'use client';
import Image from 'next/image';

const Nav = () => {
  return (
    <header>
      <nav className="p-2 bg-gradient-to-b from-[#0a2855] from-10% to-[#051937] to-100% rounded-lg shadow-navColorLight/50 shadow-t-lg">
        <ul className="flex items-center justify-between ">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-2"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="invert"
                width={70}
                height={100}
                priority
              />
            </a>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
