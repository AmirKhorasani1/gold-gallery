"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "swiper/css";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  title: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "رها محمدی",
    location: "تهران",
    title: "یک تجربه خرید عالی",
    content:
      "من حلقه ازدواجم رو از لینا خریدم و واقعا از ظرافت و داستان پشت طرحش لذت بردم. حس می‌کنم یه تکه از خاطره‌های خوبم رو همیشه همراه دارم.",
    rating: 2,
    avatar: "/images/avatars/user1.jpg",
  },
  {
    id: 2,
    name: "سارا احمدی",
    location: "شیراز",
    title: "طراحی بی‌نظیر و خاص",
    content:
      "گردنبندی که سفارش دادم دقیقاً همون چیزی بود که می‌خواستم. ظرافت در طراحی و کیفیت ساخت به شدت بالاست. قطعا باز هم خرید می‌کنم.",
    rating: 5,
    avatar: "/images/avatars/user2.jpg",
  },
  {
    id: 3,
    name: "مریم رضایی",
    location: "اصفهان",
    title: "بسته‌بندی زیبا و ارسال سریع",
    content:
      "علاوه بر زیبایی خود کار، بسته‌بندی اونقدر شیک بود که برای هدیه دادن بی‌نقص بود. از تیم پشتیبانی خوبتون هم ممنونم.",
    rating: 3,
    avatar: "/images/avatars/user3.jpg",
  },
  {
    id: 4,
    name: "علی کریمی",
    location: "مشهد",
    title: "کیفیت و اصالت",
    content:
      "دستبندی که برای همسرم گرفتم فراتر از انتظارم بود. جزئیات کار و کیفیت طلا بی‌نظیر است. ممنون از گالری خوبتون.",
    rating: 4,
    avatar: "/images/avatars/user4.jpg",
  },
  {
    id: 5,
    name: "نگین عباسی",
    location: "تبریز",
    title: "پشتیبانی عالی",
    content:
      "سایز انگشتر کمی برام بزرگ بود، اما تیم پشتیبانی با حوصله و سرعت بالا مشکل رو برطرف کردن. خدمات پس از فروش عالیه.",
    rating: 5,
    avatar: "/images/avatars/user5.jpg",
  },
  {
    id: 6,
    name: "هانیه کریمی",
    location: "کرج",
    title: "ظرافتی فراتر از انتظار",
    content:
      "واقعا از خرید این سرویس طلا راضی بودم. هم طراحی بسیار شیک بود و هم کیفیت کار عالی. حس لوکس بودن را کاملا منتقل می‌کرد.",
    rating: 3,
    avatar: "/images/avatars/user6.jpg",
  },
];

/** Initials avatar fallback */
const getInitials = (name: string) =>
  name
    .trim()
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

const CustomerReviews = () => {
  return (
    <section className="w-full px-4.5 sm:px-6 lg:px-17" dir="rtl">
      <div className="w-full max-w-screen-2xl mx-auto">

        {/* ── Section Header ── */}
        <div className="flex items-center justify-center gap-4 mb-10 sm:mb-14">
          <div className="flex-1 h-px bg-gradient-to-r from-neutral-300/80 to-transparent" />
          <h2 className="text-xl sm:text-2xl font-bold text-black font-yekan whitespace-nowrap [word-spacing:-2px] shrink-0">
            صدای <span className="text-[#10494b]">مشتریان ما</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-neutral-300/80 to-transparent" />
        </div>

        <div className="overflow-hidden w-full rounded-3xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          speed={900}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            480:  { slidesPerView: 1, spaceBetween: 16 },
            640:  { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          style={{ alignItems: "stretch" } as React.CSSProperties}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="!h-auto"
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl bg-white border border-neutral-100 p-6 sm:p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                {/* ── Stars (top-left in RTL = visual top-end) ── */}
                <div className="absolute top-6 left-6 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < testimonial.rating
                          ? "text-amber-400"
                          : "text-neutral-200"
                      }`}
                    />
                  ))}
                </div>

                {/* ── Avatar + Name ── */}
                <div className="flex items-center gap-3 mt-6">
                  {/* Avatar circle with initials fallback */}
                  <div className="w-11 h-11 shrink-0 rounded-full bg-[#10494b]/15 border-2 border-[#10494b]/20 flex items-center justify-center overflow-hidden">
                    <span className="text-[#10494b] font-bold text-sm select-none">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="font-bold text-sm text-neutral-900 truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* ── Divider ── */}
                <div className="h-px w-full bg-neutral-100" />

                {/* ── Title ── */}
                <h4 className="font-bold text-sm text-neutral-800 leading-6">
                  {testimonial.title}
                </h4>

                {/* ── Body — flex-grow pushes footer down ── */}
                <p className="text-neutral-500 text-sm leading-6 flex-grow">
                  {testimonial.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* دکمه‌های کنترل اسکرول */}
        <div className="flex justify-center items-center gap-1.5 mt-7">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#10494b]/15 hover:text-[#10494b] text-neutral-600 transition-colors cursor-pointer"
            aria-label="اسکرول به راست"
          >
            <HiArrowRight size={15} />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#10494b]/15 hover:text-[#10494b] text-neutral-600 transition-colors cursor-pointer"
            aria-label="اسکرول به چپ"
          >
            <HiArrowLeft size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
