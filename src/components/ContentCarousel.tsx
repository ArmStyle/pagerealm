"use client";

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ContentCarouselProps {
  items: Array<{
    title: string;
    author: string;
    genre: string;
    rating: number;
    imageUrl: string;
    isNew?: boolean;
    views?: string;
    type: 'novel' | 'comic';
  }>;
  showDesktopGrid?: boolean;
  itemsPerSlide?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function ContentCarousel({ 
  items, 
  showDesktopGrid = true,
  itemsPerSlide = { mobile: 2, tablet: 3, desktop: 6 },
  autoplay = false,
  autoplayDelay = 3000
}: ContentCarouselProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  if (!mounted) {
    // Return a simple grid during SSR
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {items.slice(0, 6).map((item, index) => (
          <div key={index} className="stagger-item">
            <ContentCard {...item} />
          </div>
        ))}
      </div>
    );
  }

  // Always use Swiper for all screen sizes
  return (
    <div className="relative content-carousel container-safe">
      <style jsx global>{`
        .content-carousel .swiper-button-prev,
        .content-carousel .swiper-button-next {
          display: none;
        }
        
        .content-carousel .swiper-slide {
          height: auto;
        }
        
        .content-carousel .swiper {
          overflow: hidden;
          width: 100%;
        }
        
        .content-carousel .swiper-wrapper {
          width: 100%;
        }
        
        /* Hide navigation buttons on mobile/tablet */
        @media (max-width: 1023px) {
          .content-carousel .carousel-button-prev,
          .content-carousel .carousel-button-next {
            display: none;
          }
        }
        
        /* Ensure carousel doesn't overflow on desktop */
        @media (min-width: 1024px) {
          .content-carousel {
            padding: 0 60px;
          }
          
          .content-carousel .carousel-button-prev {
            left: 0;
            transform: translateY(-50%);
          }
          
          .content-carousel .carousel-button-next {
            right: 0;
            transform: translateY(-50%);
          }
        }
      `}</style>
      
      <Swiper
        modules={[Navigation, ...(autoplay ? [Autoplay] : [])]}
        spaceBetween={16}
        slidesPerView={2}
        slidesPerGroup={1}
        centeredSlides={false}
        navigation={{
          prevEl: '.carousel-button-prev',
          nextEl: '.carousel-button-next',
        }}
        autoplay={autoplay ? {
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        } : false}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 12,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
            slidesPerGroup: 6,
          },
        }}
        className="!overflow-hidden !mx-0 w-full"
        style={{ width: '100%', overflow: 'hidden' }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <ContentCard {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Desktop Only */}
      <button
        className="carousel-button-prev absolute top-1/2 z-10 glass-card p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hidden lg:block"
        style={{ left: '10px', transform: 'translateY(-50%)' }}
        aria-label="Previous items"
      >
        <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
      </button>
      
      <button
        className="carousel-button-next absolute top-1/2 z-10 glass-card p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hidden lg:block"
        style={{ right: '10px', transform: 'translateY(-50%)' }}
        aria-label="Next items"
      >
        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
      </button>
    </div>
  );
}
