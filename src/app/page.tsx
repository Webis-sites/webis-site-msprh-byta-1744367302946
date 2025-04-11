'use client';

import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import BookingSection from '@/components/BookingSection';
import StylistsSection from '@/components/StylistsSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import PromotionsSection from '@/components/PromotionsSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import ImageGallery from '@/components/ImageGallery';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ImageGallery />
      
      <SectionHeader />
      
      <Card />
      
      <Button />
      
      <Navbar />
      
      <Footer />
      
      <LocationSection />
      
      <PromotionsSection />
      
      <ContactSection />
      
      <FAQSection />
      
      <TestimonialsSection />
      
      <ProductsSection />
      
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