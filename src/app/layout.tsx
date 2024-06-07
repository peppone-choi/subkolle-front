import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
const ReactQueryProviders = dynamic(() => import('@/util/react-query-provider'));
const ReduxProvider = dynamic(() => import('@/store/provider'));
const Footer = dynamic(() => import('@/components/Footer'));
const Header = dynamic(() => import('@/components/Header'));
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
        <ReduxProvider>
          <ReactQueryProviders>
            <Header />
            {children}
            <Footer />
          </ReactQueryProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
