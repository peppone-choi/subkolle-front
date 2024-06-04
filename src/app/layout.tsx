import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactQueryProviders from '@/util/react-query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Subkore!',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex-row w-screen">
          <ReactQueryProviders>
            <Header />
            <div className="flex justify-center">{children}</div>
            <Footer />
          </ReactQueryProviders>
        </div>
      </body>
    </html>
  );
}
