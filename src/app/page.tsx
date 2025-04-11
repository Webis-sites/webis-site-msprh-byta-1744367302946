'use client';

import React from 'react';
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
import Accordion from '@/components/Accordion';
import Form from '@/components/Form';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <Navbar />
      
      <HeroSection />
      
      <LocationSection />
      
      <PromotionsSection />
      
      <ContactSection />
      
      <FAQSection />
      
      <TestimonialsSection />
      
      <ProductsSection />
      
      <StylistsSection />
      
      <Form />
      
      <Accordion />
      
      <ImageGallery />
      
      <SectionHeader title="כבוד והצלחה" />
      
      <Card id="testimonials" type="service" image="https://via.placeholder.com/150" title="משתמש מספר 1" description="זה הכי טוב שהיה" />
      
      <Button>כתוב תגובה</Button>

      <BookingSection />
      
      <GallerySection />
      
      <ServicesSection />
      
      <Footer />
      
    </div>
  );
}