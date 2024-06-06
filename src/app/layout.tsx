import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import ReactQueryProviders from '@/util/react-query-provider';
import store from '@/store/store';
import ReduxProvider from '@/store/provider';
const Header = React.lazy(() => import('@/components/Header'));
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
