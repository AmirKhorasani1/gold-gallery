"use client";

import React, { useEffect, useState } from "react";

import TopBar from "./components/TopBar";
import MegaMenu from "./components/MegaMenu";
import SearchBar from "./components/SearchBar";
import UserActions from "./components/UserActions";
import GoldPrice from "./components/GoldPrice";
import MobileMenu from "./components/MobileMenu";

import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  const [hideTopBar, setHideTopBar] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed z-50 w-full bg-white transition-all duration-300 md:px-10 lg:px-17 shadow-sm">

        <div className="md:hidden">
          <GoldPrice />
        </div>

        {/* TOP BAR — hidden on mobile */}
        <div>
          <TopBar hideTopBar={hideTopBar} />
        </div>

        {/* MAIN NAVBAR */}
        <div className="flex h-14 md:h-17 px-5 md:px-0 w-full items-center justify-between">

          {/* ── MOBILE LAYOUT ── */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-neutral-500 hover:text-neutral-800 transition"
              aria-label="باز کردن منو"
            >
              <RxHamburgerMenu size={25} />
            </button>

            {/* Search + Cart */}
            <div className="flex items-center gap-4">
              <SearchBar />
              <UserActions mobileCartOnly />
            </div>
          </div>

          {/* ── DESKTOP LAYOUT ── */}
          <div className="hidden md:flex w-full items-center justify-between">
            {/* Right Side */}
            <div className="relative flex items-center gap-8">
              <MegaMenu />
              <div className="flex items-center gap-8 py-1 *:cursor-pointer *:text-sm *:font-semibold *:duration-300 *:hover:text-[#0f676a]">
                <p>صفحه نخست</p>
                <p>بلاگ ها</p>
                <p>تماس با ما</p>
                <p>درباره ما</p>
              </div>
            </div>

            {/* Left Side */}
            <div className="flex items-center gap-6">
              <GoldPrice />
              <SearchBar />
              <UserActions />
            </div>
          </div>

        </div>
      </nav>

      {/* MOBILE SLIDE-IN MENU */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
