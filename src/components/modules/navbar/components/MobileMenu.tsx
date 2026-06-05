"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineXMark } from "react-icons/hi2";
import { FiChevronDown, FiChevronUp, FiPackage, FiHeart, FiSettings, FiMessageSquare } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { LuLogIn } from "react-icons/lu";

interface SubCategory { name: string; icon: string; }
interface Category { id: string; title: string; icon: string; items: SubCategory[]; }

const CATEGORIES: Category[] = [
  {
    id: "1",
    title: "جواهرات",
    icon: "/images/94f88d4ac9c299bb74b129c2c496eca7ffbbaa64_1735458840.jpg",
    items: [
      { name: "انگشتر", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "گردنبند", icon: "/images/83311cdeae2bf6db93451ed011cf765a1ca0c048_1735458987.jpg" },
      { name: "دستبند", icon: "/images/f28dbc34fc2f65f4499412355c50d07aa18516a4_1735458526.jpg" },
      { name: "گوشواره", icon: "/images/c73a655a3072a4ca6ad8a4227218fd78f9b1fdf8_1735459272.jpg" },
      { name: "زنجیر", icon: "/images/0cacb98571ba0f21b0e3204ee278897d3bdd7b46_1735458525.jpg" },
    ],
  },
  {
    id: "2",
    title: "سکه ها",
    icon: "/images/7de1ce0199bd46acae96f6b82a1d0a7825275bb6_1735457991.jpg",
    items: [
      { name: "تمام سکه", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "نیم سکه", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "ربع سکه", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "سکه گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "سکه پارسیان", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
    ],
  },
  {
    id: "3",
    title: "شمش و پلاک",
    icon: "/images/d77c0e3895e0af455d7ad756df68fbbf5f6ea55b_1735457992.jpg",
    items: [
      { name: "۱ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۲.۵ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۵ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۱۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۲۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۱۰۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
    ],
  },
  {
    id: "4",
    title: "طلای آب شده",
    icon: "/images/36feb753e50ad7244e3df356b29e0533c4cdba36_1735457992.jpg",
    items: [
      { name: "۱ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۲.۵ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۵ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۱۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۲۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۱۰۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
    ],
  },
  {
    id: "5",
    title: "طلای دست دوم (کم اجرت)",
    icon: "/images/968ff9a36a57550d1411b01a02b012a2139ce9f2_1735457992.jpg",
    items: [
      { name: "۱ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۲.۵ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۵ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۱۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۲۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
      { name: "۱۰۰ گرمی", icon: "/images/1fdb1c53e00228d3906b588bba8727bd248d0114_1735458526.jpg" },
    ],
  },
];

const NAV_LINKS = [
  { label: "صفحه نخست", href: "/" },
  { label: "بلاگ ها", href: "/blog" },
  { label: "تماس با ما", href: "/contact" },
  { label: "درباره ما", href: "/about" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const isAuth = true; // same mock as UserActions

  const toggleCategory = (id: string) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/30 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer — slides in from right (RTL) */}
      <div
        dir="rtl"
        className={`fixed top-0 right-0 z-50 h-full w-[82vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
          <Link href="/" onClick={onClose}>
            <Image src="/images/logo.png" alt="Logo" width={110} height={40} quality={100} />
          </Link>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-800 transition"
            aria-label="بستن منو"
          >
            <HiOutlineXMark size={26} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-1">

          {/* User section */}
          {isAuth ? (
            <div className="flex items-center gap-3 p-3 mb-2 rounded-2xl bg-neutral-50 border border-black/8">
              <div className="w-11 h-11 rounded-full bg-black/15 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-neutral-800">نام و نام خانوادگی</span>
                <span className="text-xs text-neutral-500">۰۹۱۳ ۹۶۳ ۴۷۰۹</span>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3 mb-2 rounded-2xl border-2 border-[#10494b] text-[#10494b] font-semibold text-sm hover:bg-[#10494b1d] transition-colors"
            >
              <LuLogIn size={18} />
              ورود | ثبت نام
            </Link>
          )}

          {/* Divider */}
          <div className="h-px w-full bg-neutral-200 my-2" />

          {/* Categories accordion */}
          <p className="text-xs font-bold text-neutral-400 px-2 mb-1">دسته بندی ها</p>
          {CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <button
                onClick={() => toggleCategory(cat.id)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img src={cat.icon} alt={cat.title} className="w-9 h-9 rounded-full object-cover" />
                  <span className="text-sm font-semibold text-neutral-700">{cat.title}</span>
                </div>
                {openCategoryId === cat.id ? (
                  <FiChevronUp size={17} className="text-neutral-400" />
                ) : (
                  <FiChevronDown size={17} className="text-neutral-400" />
                )}
              </button>

              {/* Sub items */}
              {openCategoryId === cat.id && (
                <div className="flex flex-col gap-0.5 pr-4 pl-2 pb-1">
                  {cat.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/category/${cat.id}/${item.name}`}
                      onClick={onClose}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-neutral-600 hover:bg-[#ffecd2] hover:text-[#C4882E] transition-colors"
                    >
                      <img src={item.icon} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Divider */}
          <div className="h-px w-full bg-neutral-200 my-2" />

          {/* Profile links (only when auth) */}
          {isAuth && (
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-bold text-neutral-400 px-2 mb-1">حساب کاربری</p>
              {[
                { icon: <FiPackage size={17} />, label: "سفارشات من", href: "/profile/orders" },
                { icon: <BiSupport size={17} />, label: "تیکت های پشتیبانی", href: "/profile/tickets" },
                { icon: <FiMessageSquare size={17} />, label: "دیدگاه های من", href: "/profile/comments" },
                { icon: <FiHeart size={17} />, label: "علاقه مندی ها", href: "/profile/favorites" },
                { icon: <FiSettings size={17} />, label: "جزییات اکانت", href: "/profile/details" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 hover:text-[#10494b] transition-colors"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer logout */}
        {isAuth && (
          <div className="px-4 py-4 border-t border-black/10">
            <button className="flex w-full items-center justify-center gap-2 py-3 bg-rose-50 text-rose-600 font-semibold rounded-xl hover:bg-rose-100 transition-colors text-sm">
              خروج از حساب کاربری
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
