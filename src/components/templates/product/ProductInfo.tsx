"use client";

import React, { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";

const colorMap: Record<string, string> = {
  blue: "#3b82f6",
  black: "#1f2937",
  white: "#f5f5f5",
  red: "#ef4444",
  green: "#22c55e",
  yellow: "#eab308",
  gray: "#9ca3af",
  cream: "#fef3c7",
};

interface ProductInfoProps {
  title: string;
  price: number;
  weight: number;
  type: string;
  colors?: string[];
  colorsName?: string[];
  sizes?: string[];
}

const ProductInfo = ({
  title,
  price,
  weight,
  type,
  colors = [],
  colorsName = [],
  sizes = [],
}: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5">

      {/* Type badge */}
      <span className="text-xs font-semibold text-[#10494b] bg-[#10494b]/10 rounded-full px-3 py-1 w-fit">
        #{type}
      </span>

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
        {title}
      </h1>

      {/* Weight */}
      <div className="flex items-center gap-1.5 text-sm text-neutral-500">
        <span>وزن:</span>
        <span className="font-semibold text-neutral-700">
          {new Intl.NumberFormat("fa-IR").format(weight)} گرم
        </span>
      </div>

      <div className="h-px bg-neutral-200" />

      {/* Price */}
      <div className="flex items-end gap-2">
        <span className="text-2xl md:text-3xl font-extrabold text-[#10494b]">
          {new Intl.NumberFormat("fa-IR").format(price)}
        </span>
        <span className="text-sm text-neutral-500 mb-1">تومان</span>
      </div>

      {/* Colors */}
      {colors.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2.5">
            رنگ:{" "}
            <span className="text-neutral-500 font-normal">
              {colorsName[selectedColor] ?? ""}
            </span>
          </p>
          <div className="flex items-center gap-2.5">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                style={{ backgroundColor: colorMap[color] ?? color }}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor === index
                    ? "border-[#10494b] scale-110"
                    : "border-neutral-200"
                }`}
                aria-label={colorsName[index] ?? color}
              />
            ))}
          </div>
        </div>
      )}

      {/* Sizes */}
      {sizes.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2.5">سایز</p>
          <div className="flex items-center gap-2.5">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(index)}
                className={`px-4 py-2 rounded-xl border text-sm font-medium transition-colors ${
                  selectedSize === index
                    ? "bg-[#10494b] text-white border-[#10494b]"
                    : "border-neutral-300 text-neutral-600 hover:border-[#10494b]"
                }`}
              >
                {new Intl.NumberFormat("fa-IR").format(Number(size))}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 mt-2">
        <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#10494b] text-white text-sm font-semibold hover:bg-[#0d3e40] transition-colors">
          <HiOutlineShoppingBag size={19} />
          افزودن به سبد خرید
        </button>

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl border border-neutral-300 text-neutral-500 hover:border-[#10494b] hover:text-[#10494b] transition-colors"
          aria-label="افزودن به علاقه‌مندی‌ها"
        >
          {isFavorite ? (
            <GoHeartFill size={20} className="text-rose-500" />
          ) : (
            <GoHeart size={20} />
          )}
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-2 mt-4 pt-5 border-t border-neutral-200">
        <div className="flex flex-col items-center text-center gap-1.5">
          <FiShield size={20} className="text-[#10494b]" />
          <span className="text-[11px] text-neutral-500">ضمانت اصالت</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5">
          <FiTruck size={20} className="text-[#10494b]" />
          <span className="text-[11px] text-neutral-500">ارسال مطمئن</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5">
          <FiRefreshCw size={20} className="text-[#10494b]" />
          <span className="text-[11px] text-neutral-500">۷ روز ضمانت بازگشت</span>
        </div>
      </div>

    </div>
  );
};

export default ProductInfo;