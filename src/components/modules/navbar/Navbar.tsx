"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MegaMenu from "./components/MegaMenu";
import SearchBar from "./components/SearchBar";
import UserActions from "./components/UserActions";
import MobileMenu from "./components/MobileMenu";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavbarProps {
  isLogin: boolean;
}

export default function Navbar({ isLogin }: NavbarProps) {
  const [hideGoldPriceBar, setHideGoldPriceBar] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideGoldPriceBar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-neutral-200 transition-all duration-300">
        <div className="flex h-14 md:h-25 w-full items-center justify-between px-5 md:px-10 lg:px-16">
          
          {/* ── بخش موبایل ── */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-neutral-500 hover:text-neutral-800 transition"
              aria-label="باز کردن منو"
            >
              <RxHamburgerMenu size={25} />
            </button>
            <div className="flex items-center gap-4">
              <SearchBar />
              <UserActions isLogin={isLogin} mobileCartOnly />
            </div>
          </div>

          {/* ── بخش دسکتاپ ── */}
          <div className="hidden md:flex w-full items-center justify-between">
            <div className="relative flex items-center gap-8">
              <h1 className="text-xl font-bold font-yekan text-[#10494b]">گالری امیری</h1>
              <MegaMenu />
              <div className="flex items-center gap-9 py-1 *:cursor-pointer *:text-sm *:md:text-[14.5px] *:font-semibold *:duration-300 *:hover:text-[#085b5e]">
                <Link href={"/"}>صفحه نخست</Link>
                <p>بلاگ‌ها</p>
                <Link href={"/contact-us"}>تماس با ما</Link>
                <Link href={"/about-us"}>درباره ما</Link>
              </div>
            </div>
            <div>
              <UserActions isLogin={isLogin} />
            </div>
          </div>

        </div>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}