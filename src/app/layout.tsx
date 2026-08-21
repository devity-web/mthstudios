import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';

import './globals.css';

const geist = Geist({subsets: ['latin'], variable: '--font-geist'});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: 'Software studio for businesses | MTH Studio',
  description:
    'MTH Studio designs and builds websites, booking flows, and custom software for local home service businesses in Lisbon and across Portugal.',
  keywords: [
    'Lisbon software studio',
    'Leiria software',
    'home service website design',
    'local business software',
    'booking website development',
  ],
  openGraph: {
    title: 'Websites that keep local service teams booked',
    description:
      'Local strategy, design, and development for service businesses ready to turn more visits into real jobs.',
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
      'Websites and software designed to turn local demand into booked work.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
