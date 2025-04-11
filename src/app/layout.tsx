/// <reference types="react" />

import { type Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import './globals.css';
import React from 'react';

// Define fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const heebo = Heebo({
  subsets: ['hebrew'],
  display: 'swap',
  variable: '--font-heebo',
  weight: ['300', '400', '500', '700'],
});

// Define metadata
export const metadata: Metadata = {
  title: 'מספרה ביתא | Beta Hair Salon',
  description: 'אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  keywords: 'מספרה, עיצוב שיער, תספורת, צבע שיער, טיפולי שיער, סלון יופי',
  authors: [{ name: 'מספרה ביתא' }],
  creator: 'מספרה ביתא',
  publisher: 'מספרה ביתא',
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://beta-hair-salon.com',
    title: 'מספרה ביתא | Beta Hair Salon',
    description: 'אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    siteName: 'מספרה ביתא',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'מספרה ביתא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מספרה ביתא | Beta Hair Salon',
    description: 'אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://beta-hair-salon.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

// Define layout props interface
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable}`}>
      <body className="bg-gray-50 text-right">
        <div id="layout-container" className="min-h-screen flex flex-col">
          {/* Glass effect header */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-primary">
                  מספרה ביתא
                </h1>
              </div>
              <nav className="hidden md:flex space-x-reverse space-x-6">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg neumorphic-button">
                  דף הבית
                </a>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg neumorphic-button">
                  שירותים
                </a>
                <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg neumorphic-button">
                  גלריה
                </a>
                <a href="#about" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg neumorphic-button">
                  אודות
                </a>
                <a href="#contact" className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg neumorphic-button">
                  צור קשר
                </a>
              </nav>
              <button className="md:hidden text-gray-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Glass effect footer */}
          <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 text-gray-700">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary">מספרה ביתא</h3>
                  <p className="mb-4">אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary">שעות פעילות</h3>
                  <ul>
                    <li className="mb-2">ראשון - חמישי: 9:00 - 20:00</li>
                    <li className="mb-2">שישי: 9:00 - 14:00</li>
                    <li className="mb-2">שבת: סגור</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary">צור קשר</h3>
                  <ul>
                    <li className="mb-2">טלפון: 03-1234567</li>
                    <li className="mb-2">כתובת: רחוב הראשי 123, תל אביב</li>
                    <li className="mb-2">דוא"ל: info@beta-hair-salon.com</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200/50 text-center">
                <p>© {new Date().getFullYear()} מספרה ביתא. כל הזכויות שמורות.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}