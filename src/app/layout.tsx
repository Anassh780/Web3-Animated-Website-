import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NexusChain | Pro Web3 Analytics',
  description: 'Your strategic Web3 ally for profitable on-chain businesses.',
};

import { SmoothScroll } from '@/components/SmoothScroll';
import { LiveActivityFeed } from '@/components/LiveActivityFeed';
import { LivePriceTicker } from '@/components/LivePriceTicker';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${outfit.variable} font-body antialiased bg-[#030303] text-white selection:bg-purple-500/30 selection:text-white`}
        suppressHydrationWarning
      >
        <LivePriceTicker />
        <SmoothScroll>{children}</SmoothScroll>
        <LiveActivityFeed />
      </body>
    </html>
  );
}
