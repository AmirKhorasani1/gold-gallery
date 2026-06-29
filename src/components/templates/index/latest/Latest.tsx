"use client";

import JewelryCard, { JewelryItem } from "../../../modules/jewelrycard/JewelryCard";
import db from "../../../../data/db.json"
import Link from "next/link"
import { HiArrowLeft } from "react-icons/hi";

interface LatestProductsProps {
  products?: JewelryItem[];
}

const Latest = ({ products }: LatestProductsProps) => {
  const latest = products ? products.slice(-8).reverse() : db.products.slice(-8).reverse();

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between gap-7 w-full mb-6 md:mb-12 px-4.5 md:px-17">
        <h2 className="text-xl md:text-2xl font-bold text-black font-yekan whitespace-nowrap [word-spacing:-2px]">
          جدیدترین <span className="text-[#10494b]">جواهرات</span>
        </h2>

        <div className="hidden sm:block w-16 sm:w-full h-[1px] bg-neutral-300/70" />

        <Link href="/" className="flex items-center font-yekan text-xs md:text-sm whitespace-nowrap gap-2 font-semibold text-neutral-600">
          همه جواهرات <HiArrowLeft size={13} />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 px-4.5 md:px-17">
        {latest.map((item) => (
          <JewelryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
