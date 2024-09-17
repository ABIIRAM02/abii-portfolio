import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'abii-Portfolio',
  description: 'Web Developer',
};

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-oswald',
  adjustFontFallback: true,
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/titleIcon.svg" />
      </head>
      <body>
        <div className={`${oswald.variable}`}>{children}</div>
      </body>
    </html>
  );
}
