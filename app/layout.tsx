import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeCraft Solutions | Modern Web Development & AI Automation',
  description: 'Professional web development agency specializing in MERN stack, Next.js, AI automation, and WordPress transformations. Founded by Subhrajit Mukherjee & Saurav Roy.',
  keywords: 'web development, MERN stack, Next.js, AI automation, n8n, WordPress migration, React Native, Kotlin',
  authors: [{ name: 'CodeCraft Solutions' }],
  openGraph: {
    title: 'CodeCraft Solutions | Modern Web Development & AI Automation',
    description: 'Professional web development agency specializing in MERN stack, Next.js, AI automation, and WordPress transformations.',
    url: 'https://codecraft-solutions.com',
    siteName: 'CodeCraft Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeCraft Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCraft Solutions | Modern Web Development & AI Automation',
    description: 'Professional web development agency specializing in MERN stack, Next.js, AI automation, and WordPress transformations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}