'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Layout />
      
      
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 מספרה ביתא. webis
        </div>
      </footer>
    </div>
  );
}