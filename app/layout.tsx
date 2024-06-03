import type { Metadata } from 'next';
import { Inter, Lora, Inconsolata } from 'next/font/google';
import '@/app/_styles/globals.css';
import { Providers } from '@/app/providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Dictionary web app',
  description: 'Dictionary web app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} ${inconsolata.variable} antialiased  min-h-screen flex font-sans `}
      >
        {children}
      </body>
    </html>
  );
}
