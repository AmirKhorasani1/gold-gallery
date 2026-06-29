"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ─── اسلاید ۱ ─── */
const Slide1 = () => (
  <div className="relative w-full h-138 pt-20 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #022a2c 0%, #10494b 50%, #022a2c 100%)" }}
  >
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center *:text-9xl *:font-black font-yekan">
      <img
        className="absolute bottom-7 w-85 z-10"
        src="/images/Screenshot 2026-06-26 at 03-28-24 خرید آنلاین طلا گالری طلا ارل - اصالت به سبک ارل.png"
        alt="طلا"
      />
        <h1 className="text-neutral-200">زربــــــــــــــــــــــــــــــــان</h1>
        <h1 className="pr-50 text-[#ffd07e]">پـــــــــــــــــــــــــــــــارس</h1>
        <h1 className="text-[#ffe6ba]">تمــــــــــــــــــــــــــــــدن</h1>
    </div>
  </div>
);

/* ─── اسلاید ۲ ─── */
const Slide2 = () => (
  <div className="relative w-full h-138 overflow-hidden"
    style={{ background: "linear-gradient(90deg, #022a2c, #10494b" }}
  >
    {/* نوشته‌های پس‌زمینه */}
    <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
      <div>
        
      </div>
      <div>
        
      </div>
    </div>
  </div>
);

const slides = [Slide1, Slide2];

export default function Banner() {
  return (
    <section className="w-full pt-36 md:pt-25">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full relative banner-swiper"
      >
        {slides.map((SlideComponent, i) => (
          <SwiperSlide key={i}>
            <SlideComponent />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .banner-swiper .swiper-pagination {
          bottom: 18px !important;
          left: auto !important;
          right: 24px !important;
          width: auto !important;
          display: flex;
          gap: 5px;
          justify-content: flex-end;
        }
        .banner-swiper .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          border-radius: 50%;
          transition: background 0.3s, transform 0.3s;
        }
        .banner-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 24px;
          height: 8px;
          border-radius: 10px;
          transform: scale(1.3);
        }
        @media (max-width: 640px) {
          .banner-swiper .swiper-pagination {
            right: 16px !important;
            bottom: 12px !important;
          }
          .banner-swiper .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>
    </section>
  );
}
