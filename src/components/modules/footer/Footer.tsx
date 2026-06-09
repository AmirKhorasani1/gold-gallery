"use client";

import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      {/* ── بخش عکس — تمام‌عرض، مستقل از فوتر ── */}
      <div className="relative w-full h-100">
        <Image
          src="/images/Screenshot_25-5-2026_123419_orelgallery.com.jpeg"
          alt="گالری طلای لینا"
          fill
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* ── فوتر — بکگراند سفید ── */}
      <footer className="w-full bg-white text-black" dir="rtl">

        {/* ── محتوای اصلی ── */}
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 pt-14 pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14">

            {/* ستون ۱: معرفی برند */}
            <div className="flex flex-col sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/images/logo-footer.png"
                  alt="لوگوی لینا"
                  width={120}
                  height={60}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="text-[13.5px] leading-8 text-black/60 text-justify max-w-[300px]">
                ما در لینا طلا با عشق، سلیقه و با دقتی وسواس‌گونه،
                با کنار هم قرار دادن هنر و اصالت، تلاش می‌کنیم
                تجربه‌ای الهام‌بخش از زیورآلاتی ظریف، ماندگار و
                دل‌فریب برای شما رقم بزنیم؛ طلا در لحظه‌های مهم
                زندگی شما معنا پیدا می‌کند.
              </p>
            </div>

            {/* ستون ۲: اطلاعات تماس */}
            <div>
              <h3 className="text-[15px] font-semibold mb-6 text-black tracking-wide">
                اطلاعات تماس
              </h3>
              <ul className="space-y-5 text-black/60 text-[13.5px]">
                <li className="flex items-start gap-3 leading-7">
                  <HiOutlineLocationMarker className="w-4 h-4 mt-1 shrink-0 text-[#10494b]" />
                  <span>
                    تهران، سعادت‌آباد، میدان کتاب، بلوار کوهستان،
                    خیابان ۲۴، واحد ۸
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhoneCall className="w-4 h-4 shrink-0 text-[#10494b]" />
                  <span dir="ltr">۰۲۱-۲۲۳۳۸۵۵۶</span>
                </li>
                <li className="flex items-center gap-3">
                  <HiOutlineMail className="w-4 h-4 shrink-0 text-[#10494b]" />
                  <span dir="ltr" className="text-[13px]">info@linagoldgallery.ir</span>
                </li>
                <li className="flex items-center gap-3">
                  <HiOutlineClock className="w-4 h-4 shrink-0 text-[#10494b]" />
                  <span>همه‌روزه از ساعت ۱۰ صبح تا ۱۰ شب</span>
                </li>
              </ul>
            </div>

            {/* ستون ۳: دسته‌بندی‌ها */}
            <div>
              <h3 className="text-[15px] font-semibold mb-6 text-black tracking-wide">
                دسته‌بندی‌ها
              </h3>
              <ul className="space-y-4 text-[13.5px] text-black/60">
                {["انگشتر طلا", "دستبند طلا", "گردنبند طلا", "زنجیر طلا", "گوشواره طلا"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 hover:text-[#10494b] transition-colors duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#10494b]/40 group-hover:bg-[#10494b] transition-colors duration-200 shrink-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ستون ۴: دسترسی سریع */}
            <div>
              <h3 className="text-[15px] font-semibold mb-6 text-black tracking-wide">
                دسترسی سریع
              </h3>
              <ul className="space-y-4 text-[13.5px] text-black/60">
                {["فروشگاه", "سبدخرید", "سوالات متداول", "حساب کاربری", "مجله ارل"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 hover:text-[#10494b] transition-colors duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#10494b]/40 group-hover:bg-[#10494b] transition-colors duration-200 shrink-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ستون ۵: نمادها و شبکه‌های اجتماعی */}
            <div>
              <h3 className="text-[15px] font-semibold mb-6 text-black tracking-wide">
                نمادهای الکترونیکی
              </h3>

              <div className="w-[160px] h-[100px] bg-neutral-100 border border-neutral-200 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/enamad.png"
                  alt="نماد اعتماد الکترونیکی"
                  width={110}
                  height={60}
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* شبکه‌های اجتماعی */}
              <div className="flex items-center gap-2.5 mt-7">
                {[
                  { href: "#", icon: <FaTelegramPlane className="w-4 h-4" />, label: "تلگرام" },
                  { href: "#", icon: <FaWhatsapp className="w-4 h-4" />, label: "واتساپ" },
                  { href: "#", icon: <FaInstagram className="w-4 h-4" />, label: "اینستاگرام" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-100 border border-neutral-200 text-black/50 hover:bg-[#10494b] hover:border-[#10494b] hover:text-white transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── خط جداکننده ── */}
        <div className="w-full h-px bg-neutral-200" />

        {/* ── نوار کپی‌رایت ── */}
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[12.5px] text-black/40">
            <p className="text-center sm:text-right">
              کلیه حقوق مادی و معنوی این سایت برای گالری طلای لینا محفوظ است
            </p>
            <p className="text-center sm:text-left whitespace-nowrap">
              طراحی و توسعه: گروه طراحی نارون
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;