"use client"

import { useRef, useState, useEffect } from "react";
import db from "../../../../data/db.json";
import JewelryCard from "../../../modules/jewelrycard/JewelryCard";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const CollectionProducts = () => {
  // تعریف نوع HTMLDivElement برای ref
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      // استفاده از Math.abs در صورت نیاز به دلیل dir="rtl" بودن کانتینر
      const currentScroll = Math.abs(scrollRef.current.scrollLeft);
      setShowRightArrow(currentScroll > 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // تعریف دقیق مقادیری که direction می‌تواند دریافت کند
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 370;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[92.5%] md:w-[91%] relative">  

        <div className="flex w-full justify-between gap-6 items-center pb-3">
          <h2 className="text-xl md:text-2xl font-yekan flex font-bold text-neutral-800">
            کالکشن <span className="text-[#10494b]">ایران</span>
          </h2>
          <div className="hidden md:block w-full border border-black/10"></div>

          <div className="flex gap-3">
            <div className="flex gap-3">
              <button
                onClick={() => scroll("right")}
                className="active:scale-80 size-5 md:size-7 duration-100 pl-0.5 z-10 hover:bg-[#10494b]/15 hover:text-[#10494b] text-neutral-600 bg-neutral-300/30 rounded-xl w-8 md:w-10 h-8 md:h-10 flex items-center justify-center"
              >
                <HiArrowRight />
              </button>
              <button
                onClick={() => scroll("left")}
                className="active:scale-80 size-5 md:size-7 duration-100 pr-0.5 z-10 hover:bg-[#10494b]/15 hover:text-[#10494b] text-neutral-600 bg-neutral-300/30 rounded-xl w-8 md:w-10 h-8 md:h-10 flex items-center justify-center"
              >
                <HiArrowLeft />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="w-full mt-4 pb-4 md:mt-8 md:pb-8 rounded-3xl overflow-x-auto hide-scrollbar"
          dir="rtl"
        >
          <div className="flex gap-3.5 md:gap-5">
            {db.products.slice(0, 10).map((jewel: any) => (
              <JewelryCard key={jewel.id} {...jewel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProducts;