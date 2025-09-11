"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Star, Eye, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface HeroCarouselItem {
  id: string;
  title: string;
  author: string;
  description: string;
  genre: string;
  rating: number;
  views: string;
  imageUrl: string;
  bgImageUrl?: string;
  isNew?: boolean;
  chapters?: number;
  lastUpdate?: string;
  type: "novel" | "comic";
}

interface HeroCarouselProps {
  items: HeroCarouselItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function HeroCarousel({
  items,
  autoplay = true,
  autoplayDelay = 6000,
}: HeroCarouselProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Simple fallback during SSR
    const firstItem = items[0];
    if (!firstItem) return null;

    return (
      <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              firstItem.bgImageUrl || firstItem.imageUrl
            })`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center p-6 lg:p-12">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {firstItem.title}
            </h1>
            <p className="text-lg lg:text-xl opacity-90 mb-6">
              {firstItem.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative hero-carousel rounded-2xl overflow-hidden container-safe">
      <style jsx global>{`
        .hero-carousel .swiper-button-prev,
        .hero-carousel .swiper-button-next {
          display: none;
        }

        .hero-carousel .swiper {
          overflow: hidden;
          width: 100%;
        }

        .hero-carousel .swiper-pagination {
          bottom: 20px;
        }

        .hero-carousel .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s;
        }

        .hero-carousel .swiper-pagination-bullet-active {
          background: white;
          width: 40px;
          border-radius: 6px;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          prevEl: ".hero-button-prev",
          nextEl: ".hero-button-next",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        loop={items.length > 1}
        className="h-[400px] lg:h-[500px]"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-full px-10">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-7000"
                style={{
                  backgroundImage: `url(${item.bgImageUrl || item.imageUrl})`,
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7 text-white space-y-4 lg:space-y-6">
                      {/* Badge */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.type === "novel"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-purple-500/20 text-purple-300"
                          }`}
                        >
                          {item.type === "novel" ? "นิยาย" : "การ์ตูน"}
                        </span>
                        {item.isNew && (
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500/20 text-red-300">
                            ใหม่
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300">
                          {item.genre}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        {item.title}
                      </h1>

                      {/* Author */}
                      <p className="text-lg lg:text-xl text-gray-300">
                        โดย{" "}
                        <span className="text-white font-medium">
                          {item.author}
                        </span>
                      </p>

                      {/* Description */}
                      <p className="text-base lg:text-lg opacity-90 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-6 text-sm lg:text-base">
                        <div className="flex items-center gap-2">
                          <Star
                            className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400"
                            fill="currentColor"
                          />
                          <span>{item.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 lg:w-5 lg:h-5" />
                          <span>{item.views}</span>
                        </div>
                        {item.chapters && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span>{item.chapters} ตอน</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
                        <Link
                          href={`/reading-demo`}
                          className="px-6 lg:px-8 py-3 lg:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
                        >
                          เริ่มอ่าน
                        </Link>
                        <button className="px-6 lg:px-8 py-3 lg:py-4 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                          เพิ่มในรายการ
                        </button>
                      </div>
                    </div>

                    {/* Book Cover */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={288}
                          height={384}
                          className="relative w-48 lg:w-64 xl:w-72 h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {items.length > 1 && (
        <>
          <button
            className="hero-button-prev absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 glass-card p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            className="hero-button-next absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 glass-card p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </>
      )}
    </div>
  );
}
