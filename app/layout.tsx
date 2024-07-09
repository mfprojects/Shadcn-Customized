import type { Metadata } from 'next';
import './globals.css';
import { Montserrat, Inter } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

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
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <Nav />
        <main className="flex-grow w-full h-full pt-16 bg-cover bg-[center_center] bg-no-repeat bg-bgparticleLight">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
