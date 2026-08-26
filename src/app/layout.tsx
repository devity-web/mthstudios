import type {Metadata} from 'next';
import {Geist, Instrument_Serif} from 'next/font/google';

import './globals.css';
import {Analytics} from '@vercel/analytics/next';

const geist = Geist({subsets: ['latin'], variable: '--font-geist'});
const instrumentMono = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-mono',
  weight: '400'
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: 'Website design and custom software in Portugal | MTH Studio',
  description:
    'MTH Studio designs websites and custom software for businesses across Portugal. Win better opportunities and reduce repetitive admin.',
  keywords: [
    'software studio Portugal',
    'website design Portugal',
    'web design Leiria',
    'custom software Portugal',
    'business website development',
    'empresa criar site',
    'criar landing page',
    'landing page',
    'agencia em leiria',
  ],
  openGraph: {
    title: 'Win more business. Waste less time.',
    description:
      'Websites and custom software for businesses across Portugal that want better opportunities and less repetitive admin.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'MTH Studio local software services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MTH Studio for businesses',
    description:
      'Websites customers understand and software teams can use every day.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </html>
  );
}
