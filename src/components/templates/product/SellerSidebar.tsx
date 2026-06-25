"use client";

import React from "react";
import { FiShield, FiPackage, FiTruck } from "react-icons/fi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

interface SellerSidebarProps {
  seller: string;
  price: number;
  stock?: number;
}

const SellerSidebar = ({ seller, price, stock }: SellerSidebarProps) => {
  return (
    <div className="bg-white rounded-3xl p-4 md:p-6 flex flex-col gap-4">

      {/* Seller */}
      <div>
        <p className="text-sm font-bold text-gray-800 mb-3">فروشنده</p>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#10494b]/10 flex items-center justify-center shrink-0">
            <HiOutlineBuildingStorefront size={18} className="text-[#10494b]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">{seller}</span>
            <span className="text-[11px] text-emerald-600 font-medium">
              ۱۰۰٪ رضایت از کالا | عملکرد عالی
            </span>
          </div>
        </div>
      </div>

      <div className="h-px bg-neutral-100" />

      {/* Price */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-2xl font-extrabold text-gray-800">
            {new Intl.NumberFormat("fa-IR").format(price)}
          </span>
          <span className="text-xs text-neutral-500">تومان</span>
        </div>

        {stock !== undefined && stock <= 3 && (
          <p className="text-xs font-semibold text-rose-500">
            🔥 تنها {new Intl.NumberFormat("fa-IR").format(stock)} عدد در انبار باقی مانده
          </p>
        )}
      </div>

      {/* CTA */}
      <button className="w-full py-3.5 rounded-2xl bg-[#10494b] text-white text-sm font-bold hover:bg-[#0d3e40] transition-colors">
        افزودن به سبد خرید
      </button>

      {/* Trust */}
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-center gap-2.5 text-xs text-neutral-600">
          <FiShield size={16} className="text-[#10494b]" />
          گارانتی اصالت و سلامت فیزیکی کالا
        </div>
        <div className="flex items-center gap-2.5 text-xs text-neutral-600">
          <FiPackage size={16} className="text-[#10494b]" />
          موجود در انبار فروشنده
        </div>
        <div className="flex items-center gap-2.5 text-xs text-neutral-600">
          <FiTruck size={16} className="text-[#10494b]" />
          ارسال توسط فروشگاه، با بسته‌بندی ایمن
        </div>
      </div>

    </div>
  );
};

export default SellerSidebar;