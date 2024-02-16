import { Source_Sans_3, Source_Serif_4, Roboto } from 'next/font/google';

import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Providers } from './providers';

const sourseSansProFontFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});
const SourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
});
const RobotoFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Kirlian cameras',
  description: 'Kirlian cameras description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${sourseSansProFontFont.variable} ${SourceSerifPro.variable}
        ${RobotoFont.variable} font-source-sans text-dark`}
      >
        <Providers>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
