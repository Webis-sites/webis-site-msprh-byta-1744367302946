'use client';

import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import BookingSection from '@/components/BookingSection';
import StylistsSection from '@/components/StylistsSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StylistsSection />
      
      <BookingSection />
      
      <GallerySection />
      
      <ServicesSection />
      
      <HeroSection />
      
      <Layout />
      
      
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 מספרה ביתא. webis
        </div>
      </footer>
    </div>
  );
}