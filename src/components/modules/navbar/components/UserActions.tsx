"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { LuLogIn } from "react-icons/lu";
import { FiTrash2 } from "react-icons/fi";
import { TbMoneybag } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { TbBox } from "react-icons/tb";

interface UserActionsProps {
  isLogin: boolean;
  mobileCartOnly?: boolean;
}

const UserActions = ({ isLogin, mobileCartOnly = false }: UserActionsProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/signout", { method: "POST" });
    router.refresh();
  };

  return (
    <div className="flex items-center gap-7">

      {/* ================= CART ================= */}
      <div className="group relative">
        <button className="relative text-neutral-400 hover:text-neutral-600 duration-500 cursor-pointer mt-2">
          <IoBagOutline size={25} />
          <span className="absolute -left-1.5 md:-left-2 top-0 md:-top-1 w-3.5 h-3.5 md:h-4.5 md:w-4.5 rounded-4xl bg-[#10494b] pt-1 text-[10px] md:text-[11.5px] text-white flex items-center justify-center">
            ۲
          </span>
        </button>

        <div className="absolute left-0 md:left-0 right-0 md:right-auto top-full pt-4.5 invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 z-50">
          <div className="w-80 rounded-2xl bg-white border border-neutral-200 shadow-xs overflow-hidden flex flex-col p-3 gap-3 text-sm font-medium text-neutral-700">

            <div className="flex items-center justify-between pb-2 border-b border-black/10">
              <span className="text-sm font-semibold text-neutral-800">سبد خرید شما</span>
              <span className="text-xs text-neutral-500">۲ آیتم</span>
            </div>

            <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pl-1 custom-scrollbar">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-neutral-100 flex-shrink-0 flex items-center justify-center">
                  <img src="/images/ring-placeholder.jpg" alt="Product" className="w-12 h-12 object-cover rounded-lg mix-blend-multiply" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-sm font-semibold line-clamp-1">انگشتر طلا ۱۸ عیار مینیمال</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-neutral-500">۱ عدد</span>
                    <span className="text-sm font-bold text-[#10494b]">۱۲,۵۰۰,۰۰۰ تومان</span>
                  </div>
                </div>
                <button className="text-rose-500 hover:text-rose-700 transition p-1">
                  <FiTrash2 size={16} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-neutral-100 flex-shrink-0 flex items-center justify-center">
                  <img src="/images/necklace-placeholder.jpg" alt="Product" className="w-12 h-12 object-cover rounded-lg mix-blend-multiply" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-sm font-semibold line-clamp-1">گردنبند مروارید کلاسیک</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-neutral-500">۱ عدد</span>
                    <span className="text-sm font-bold text-[#10494b]">۲۸,۳۰۰,۰۰۰ تومان</span>
                  </div>
                </div>
                <button className="text-rose-500 hover:text-rose-700 transition p-1">
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-3 border-t border-black/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">مبلغ قابل پرداخت:</span>
                <span className="text-base font-bold text-[#10494b]">۴۰,۸۰۰,۰۰۰ تومان</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Link href="/cart" className="w-1/2 text-center py-2.5 rounded-xl border-2 border-[#10494b] text-[#10494b] font-semibold text-sm hover:bg-[#10494b1d] transition-colors">
                  مشاهده سبد
                </Link>
                <Link href="/checkout" className="w-1/2 text-center py-2.5 rounded-xl bg-[#10494b] text-white font-semibold text-sm hover:bg-[#0c3638] transition-colors">
                  تسویه حساب
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= USER ================= */}
      {!mobileCartOnly && (
        <>
          {!isLogin ? (
            /* ── Not logged in ── */
            <Link
              href="/login-register"
              className="flex w-35 cursor-pointer items-center justify-center gap-1.5 rounded-2xl border-2 border-[#10494b] py-2.5 text-sm font-medium text-[#10494b] transition duration-300 hover:bg-[#10494b1d] bg-white [word-spacing:-1px]"
            >
              <LuLogIn size={19} />
              ورود | ثبت نام
            </Link>
          ) : (
            /* ── Logged in ── */
            <div className="group relative">
              <button className="pt-1 text-neutral-400 hover:text-neutral-600 duration-500 cursor-pointer">
                <HiOutlineUserCircle size={30} />
              </button>

              <div className="absolute left-0 top-full pt-4 invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 z-50">
                <div className="w-60 rounded-2xl bg-white border border-neutral-200 shadow-xs overflow-hidden flex flex-col p-2 gap-1 text-sm font-medium text-neutral-700">

                  <div className="flex items-center gap-3 w-full p-3 border-b border-black/10">
                    <div className="w-12 h-12 rounded-full bg-black/15" />
                    <div className="flex flex-col gap-2">
                      <h1 className="text-sm font-bold text-neutral-800">نام و نام خانوادگی</h1>
                      <p className="text-xs text-neutral-500">۰۹۱۳ ۹۶۳ ۴۷۰۹</p>
                    </div>
                  </div>

                  <Link href="/profile/orders" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-100 hover:text-[#10494b] transition-colors mt-1 font-medium">
                    <TbBox size={24} /> سفارشات من
                  </Link>
                  <Link href="/profile/tickets" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-100 hover:text-[#10494b] transition-colors font-medium">
                    <TbMoneybag size={23} /> تراکنش ها
                  </Link>
                  <Link href="/profile/comments" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-100 hover:text-[#10494b] transition-colors font-medium">
                    <TbMessage size={23} /> دیدگاه های من
                  </Link>
                  <Link href="/profile/favorites" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-100 hover:text-[#10494b] transition-colors font-medium">
                    <TbHeart size={23} /> علاقه مندی ها
                  </Link>
                  <Link href="/profile/details" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-100 hover:text-[#10494b] transition-colors font-medium">
                    <TbSettings size={23} /> جزییات اکانت
                  </Link>

                  <div className="h-px w-full bg-neutral-200 my-1" />

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center cursor-pointer gap-3 p-2.5 bg-rose-50 text-rose-600 font-semibold rounded-xl hover:bg-rose-100 hover:text-rose-700 transition-colors"
                  >
                    خروج از حساب کاربری
                  </button>

                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserActions;