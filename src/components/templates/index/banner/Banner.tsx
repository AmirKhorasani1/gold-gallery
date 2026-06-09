"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const slidesData = [
  {
    id: 1,
    desktop: "/images/banner1.jpg",
    mobile: "/images/banner1.webp", // اگر تصویر موبایل ندارید همان desktop را بگذارید
    alt: "Gold price and online buying banner",
    width: 1920,
    height: 800,
  },
  {
    id: 2,
    desktop: "/images/banner1.jpg",
    mobile: "/images/banner1.webp",
    alt: "New collection banner",
    width: 1920,
    height: 800,
  },
  {
    id: 3,
    desktop: "/images/banner2.jpg",
    mobile: "/images/banner2.webp",
    alt: "New collection banner",
    width: 1920,
    height: 800,
  },
];

export default function Banner() {
  return (
    <section className="w-full bg-white pt-36 md:pt-31">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        loop
        className="w-full relative"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full">
            {/* Desktop image */}
            <Image
              src={slide.desktop}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              className="hidden sm:block w-full h-auto"
              priority={slide.id === 1}
              quality={100}
              unoptimized
            />
            {/* Mobile image */}
            <Image
              src={slide.mobile}
              alt={slide.alt}
              width={750}
              height={750}
              className="block sm:hidden w-full h-auto"
              priority={slide.id === 1}
              quality={100}
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 5px !important;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ffffff50;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #fff;
        }

        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 8px !important;
          }

          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>
    </section>
  );
}