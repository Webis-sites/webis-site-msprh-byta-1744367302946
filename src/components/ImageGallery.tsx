'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Image from 'next/image';

// Types
interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  columns?: 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  aspectRatio?: '1:1' | '4:3' | '16:9';
  showCaptions?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  gap = 'medium',
  aspectRatio = '4:3',
  showCaptions = true,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage(1); // RTL - left arrow moves forward
          break;
        case 'ArrowRight':
          navigateImage(-1); // RTL - right arrow moves backward
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  // Map gap size to Tailwind classes
  const gapSizeMap = {
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-6',
  };

  // Map columns to Tailwind grid classes
  const columnMap = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  // Map aspect ratio to Tailwind classes
  const aspectRatioMap = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-[16/9]',
  };

  // If no images are provided, show placeholder
  if (!images || images.length === 0) {
    return (
      <div 
        id="image-gallery"
        dir="rtl" 
        className="text-right p-6 rounded-xl bg-gray-100 shadow-inner flex items-center justify-center"
      >
        <p className="text-gray-500">אין תמונות להצגה</p>
      </div>
    );
  }

  return (
    <div id="image-gallery" dir="rtl" className="w-full text-right">
      <div 
        ref={galleryRef}
        className={`grid ${columnMap[columns]} ${gapSizeMap[gap]}`}
      >
        {images.map((image, index) => (
          <motion.div
            key={`gallery-image-${index}`}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className={`
                relative overflow-hidden rounded-xl cursor-pointer
                ${aspectRatioMap[aspectRatio]}
                bg-gradient-to-br from-gray-100 to-gray-200
                shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]
                hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.9)]
                transition-all duration-300
              `}
              onClick={() => openLightbox(index)}
              role="button"
              aria-label={`פתח תמונה של ${image.alt}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index);
                }
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </div>
            {showCaptions && image.caption && (
              <div className="mt-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-white/20">
                <p className="text-sm text-right font-medium text-gray-800">{image.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <div className="relative aspect-auto max-h-[80vh] min-h-[300px] min-w-[300px]">
                  <Image
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                  />
                </div>
                
                {images[selectedImage].caption && (
                  <div className="absolute bottom-0 right-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-right">
                    <p className="text-white text-lg">{images[selectedImage].caption}</p>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(-1);
                }}
                disabled={selectedImage === 0}
                aria-label="תמונה קודמת"
              >
                <FiChevronRight size={24} />
              </button>
              
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(1);
                }}
                disabled={selectedImage === images.length - 1}
                aria-label="תמונה הבאה"
              >
                <FiChevronLeft size={24} />
              </button>

              {/* Close button */}
              <button
                className="absolute top-4 left-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                onClick={closeLightbox}
                aria-label="סגור"
              >
                <FiX size={24} />
              </button>
              
              {/* Image counter */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Example usage component
const ImageGalleryExample: React.FC = () => {
  // Sample data for the gallery
  const sampleImages: ImageItem[] = [
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "תספורת נשים מודרנית",
      caption: "תספורת נשים מודרנית - סגנון 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "צביעת שיער",
      caption: "צביעת שיער מקצועית"
    },
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "תספורת גברים",
      caption: "תספורת גברים - סגנון קלאסי"
    },
    {
      src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "טיפול שיער",
      caption: "טיפולי שיער מתקדמים"
    },
    {
      src: "https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "עיצוב שיער לאירועים",
      caption: "עיצוב שיער לאירועים מיוחדים"
    },
    {
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "תסרוקת כלה",
      caption: "תסרוקות כלה - יום החתונה המושלם"
    }
  ];

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8 text-right">
      <h2 className="text-3xl font-bold mb-6 text-[#588C7E]">הגלריה שלנו</h2>
      <p className="mb-8 text-gray-700">
        צפו בתמונות מהעבודות האחרונות שלנו במספרה ביתא. אנו מתמחים במגוון סגנונות ועיצובי שיער.
      </p>
      
      <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]">
        <ImageGallery 
          images={sampleImages} 
          columns={3}
          gap="medium"
          aspectRatio="4:3"
          showCaptions={true}
        />
      </div>
    </div>
  );
};

export default ImageGalleryExample;