import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AI Cheat Sheet Generator | Create Professional Learning Resources',
    template: '%s | AI Cheat Sheet Generator'
  },
  description: 'Generate comprehensive, professional cheat sheets for any topic using AI. Perfect for students, developers, and professionals.',
  keywords: ['cheat sheet generator', 'AI learning tools', 'study guides', 'educational resources', 'programming references', 'quick guides'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'AI Cheat Sheet Generator',
    description: 'Create professional cheat sheets instantly with AI',
    siteName: 'AI Cheat Sheet Generator'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cheat Sheet Generator',
    description: 'Create professional cheat sheets instantly with AI'
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background/90 to-primary/10">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}