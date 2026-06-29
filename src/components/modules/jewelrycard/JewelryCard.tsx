"use client";

import Link from "next/link";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export interface JewelryItem {
  id: string | number;
  title: string;
  price: number;
  weight: number;
  img?: string;
  type: string;
  colors?: string[];
  colorsName?: string[];
  sizes?: string[];
}

const JewelryCard = ({ id, title, price, weight, img, type }: JewelryItem) => {
  return (
    <Link
      href={`/product/${id}`}
      className="relative bg-white p-3.5 md:p-5 rounded-3xl flex flex-col justify-center transition-all cursor-pointer hover:scale-101 hover:shadow-lg"
    >
      <div className="flex justify-between items-center">
        <p className="text-xs md:text-sm text-neutral-400">#{type}</p>

        <div className="flex gap-2.5 md:gap-3 *:hover:text-[#10494b] *:duration-500 text-lg md:text-[22px] text-neutral-400">
          <button
            onClick={(e) => e.preventDefault()}
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <GoHeart />
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            title="افزودن به سبد خرید"
          >
            <HiOutlineShoppingBag />
          </button>
        </div>
      </div>

      <div className="relative w-full md:my-1.5 flex items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={title}
          className="rounded-2xl max-w-55 md:max-w-73 object-contain"
        />
      </div>

      <div>
        <h1 className="text-sm font-yekan md:text-base font-semibold text-neutral-800">{title}</h1>
        <div className="flex items-center gap-1 text-[10px] md:text-[13px] mt-1 md:mt-0.5 font-medium text-neutral-500">
          <p>وزن :</p>
          {new Intl.NumberFormat("fa-IR").format(weight)}
        </div>
      </div>

      <div className="flex justify-end items-center font-yekan">
        <div className="text-[14.5px] md:text-base text-black flex flex-col gap-0.5 items-end font-semibold">
          <span className="text-[10px] md:text-xs font-medium text-neutral-500">تومان</span>
          {new Intl.NumberFormat("fa-IR").format(price)}
        </div>
      </div>
    </Link>
  );
};

export default JewelryCard;