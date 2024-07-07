import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CompLib',
  description: 'Responsively designed component library',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Nav />
        <main className="flex-grow w-full h-full pt-16 bg-cover bg-[center_center] bg-repeat bg-gridbg">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
