"use client"

import React, { useRef } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

// Category item type definition
interface Category {
  id: number;
  title: string;
  icon: string;
  isActive?: boolean;
}

// Static categories data
const categories: Category[] = [
  { id: 1, title: "گوشواره", icon: "/images/c73a655a3072a4ca6ad8a4227218fd78f9b1fdf8_1735459272.jpg" },
  { id: 2, title: "انگشتر", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
  { id: 3, title: "گردنبند", icon: "/images/83311cdeae2bf6db93451ed011cf765a1ca0c048_1735458987.jpg" },
  { id: 4, title: "دستبند", icon: "/images/f28dbc34fc2f65f4499412355c50d07aa18516a4_1735458526.jpg" },
  { id: 5, title: "پابند", icon: "/images/94f88d4ac9c299bb74b129c2c496eca7ffbbaa64_1735458840.jpg" },
  { id: 6, title: "زنجیر", icon: "/images/0cacb98571ba0f21b0e3204ee278897d3bdd7b46_1735458525.jpg" },
  { id: 7, title: "سکه ها", icon: "/images/7de1ce0199bd46acae96f6b82a1d0a7825275bb6_1735457991.jpg" },
  { id: 8, title: "شمش و پلاک", icon: "/images/d77c0e3895e0af455d7ad756df68fbbf5f6ea55b_1735457992.jpg" },
  { id: 9, title: "طلای آب شده", icon: "/images/36feb753e50ad7244e3df356b29e0533c4cdba36_1735457992.jpg" },
  { id: 10, title: "طلای دست دوم", icon: "/images/968ff9a36a57550d1411b01a02b012a2139ce9f2_1735457992.jpg" },
];

const Categories = () => {
  // رفرنس برای دسترسی به کانتینر اسکرول
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const offset = direction === "left" ? -scrollAmount : scrollAmount;
      
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4.5 md:px-17 overflow-hidden" dir="rtl">
      {/* Section header */}
      <div className="w-full flex items-center justify-center gap-4 mb-12 px-4">
        <div className="w-16 sm:w-full h-[1.5px] bg-gradient-to-r from-neutral-300/80 to-transparent"></div>
        
        <h2 className="text-xl md:text-2xl font-bold text-black font-yekan whitespace-nowrap [word-spacing:-2px]">
          دسته‌بندی <span className="text-[#10494b]">جواهرات</span>
        </h2>
        
        <div className="w-16 sm:w-full h-[1.5px] bg-gradient-to-l from-neutral-300/80 to-transparent"></div>
      </div>

      {/* Categories scroll container */}
      <div className="relative w-full flex items-center justify-center">
        
        {/* سایه محوشونده سمت راست */}
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/50 to-transparent z-10 pointer-events-none"></div>
        
        {/* سایه محوشونده سمت چپ */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/50 to-transparent z-10 pointer-events-none"></div>

        {/* اسکرولر (با قابلیت اسکرول دستی و مخفی کردن نوار اسکرول) */}
        <div 
          ref={scrollRef}
          className="flex w-full overflow-x-auto gap-3.5 md:gap-6 snap-x snap-mandatory scroll-smooth pb-4
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative w-32 h-37 md:w-45 md:h-50 bg-white md:pt-10 md:pb-20 rounded-3xl hover:bg-[#10494b1f] hover:border-2 hover:border-[#10494b] overflow-hidden cursor-pointer flex flex-col justify-center items-center group flex-shrink-0 snap-center"
            >
              {/* Category image */}
              <img
                className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover"
                src={cat.icon}
                alt={cat.title}
              />

              <h3 className="md:hidden mt-2.5 text-black text-[13.5px] font-medium transition-transform duration-500 group-hover:-translate-y-2">
                {cat.title}
              </h3>

              {/* Category text content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end md:pb-4 pointer-events-none">
                <h3 className="hidden md:block text-black text-base font-medium transition-transform duration-500 group-hover:-translate-y-2">
                  {cat.title}
                </h3>

                {/* View category action */}
                <div
                  className={`hidden md:flex items-center gap-1 text-black/85 text-[13px] font-medium transition-all duration-500 
                  ${
                    cat.isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                >
                  <span className="transition-all text-xs">مشاهده جواهرات</span>
                  <IoIosArrowBack className="text-[13px] animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* دکمه‌های کنترل اسکرول */}
      <div className="flex justify-center items-center gap-1.5 mt-3">
        <button
          onClick={() => scroll("right")}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#10494b]/15 hover:text-[#10494b] text-neutral-600 transition-colors cursor-pointer"
          aria-label="اسکرول به راست"
        >
          <HiArrowRight size={15} />
        </button>

        <button
          onClick={() => scroll("left")}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#10494b]/15 hover:text-[#10494b] text-neutral-600 transition-colors cursor-pointer"
          aria-label="اسکرول به چپ"
        >
          <HiArrowLeft size={15} />
        </button>
      </div>

    </div>
  );
};

export default Categories;
