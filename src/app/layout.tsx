import type {Metadata} from 'next';
import {Cormorant_Garamond, Geist, Geist_Mono} from 'next/font/google';

import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import {cn} from '@/lib/utils';

const geist = Geist({subsets: ['latin'], variable: '--font-sans'});
const mono = Geist_Mono({subsets: ['latin'], variable: '--font-mono'});
const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: 'Landing pages engineered to convert - MTH/studios',
  description:
    'An AI-powered software studio delivering strategy-led, high-conversion landing pages at startup speed.',
  openGraph: {
    title: 'MTH Studio — Landing pages engineered to convert',
    description:
      'AI-powered strategy, design, and development for landing pages that perform.',
    images: [{url: '/og.png', width: 1200, height: 630, alt: 'MTH Studio'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MTH Studio — Landing pages engineered to convert',
    description:
      'AI-powered strategy, design, and development for landing pages that perform.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(geist.variable, mono.variable, display.variable)}
    >
      <head>
        <link
          rel="preload"
          href="/images/halftone-landscape-hero.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="h-full w-full overflow-hidden font-sans text-foreground">
        <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}
