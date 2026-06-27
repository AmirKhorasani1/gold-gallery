"use client";

import Image from "next/image";
import Link from "next/link";
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
import { FiPhoneCall, FiChevronLeft } from "react-icons/fi";

const categories = [
  { label: "انگشتر طلا", href: "/products?type=ring" },
  { label: "دستبند طلا", href: "/products?type=bracelet" },
  { label: "گردنبند طلا", href: "/products?type=necklace" },
  { label: "زنجیر طلا", href: "/products?type=chain" },
  { label: "گوشواره طلا", href: "/products?type=earring" },
];

const quickLinks = [
  { label: "فروشگاه", href: "/products" },
  { label: "سبد خرید", href: "/cart" },
  { label: "حساب کاربری", href: "/profile" },
  { label: "علاقه‌مندی‌ها", href: "/wishlist" },
  { label: "مجله گالری", href: "/blog" },
];

const legalLinks = [
  { label: "تماس با ما", href: "/contact-us" },
  { label: "درباره ما", href: "/about" },
  { label: "قوانین و مقررات", href: "/terms" },
  { label: "حریم خصوصی", href: "/privacy" },
  { label: "سوالات متداول", href: "/faq" },
];

const socials = [
  { href: "https://t.me/", icon: <FaTelegramPlane className="w-[17px] h-[17px]" />, label: "تلگرام" },
  { href: "https://wa.me/", icon: <FaWhatsapp className="w-[17px] h-[17px]" />, label: "واتساپ" },
  { href: "https://instagram.com/", icon: <FaInstagram className="w-[17px] h-[17px]" />, label: "اینستاگرام" },
];

const NavList = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) => (
  <div>
    <h3 className="text-[14px] font-bold mb-5 text-[#10494b] tracking-wide flex items-center gap-2">
      <span className="w-1 h-4 rounded-full bg-[#10494b] inline-block" />
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="group flex items-center gap-1.5 text-[13px] text-neutral-500 hover:text-[#10494b] transition-colors duration-200"
          >
            <FiChevronLeft className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#10494b] group-hover:-translate-x-0.5 transition-all duration-200 shrink-0" />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer
      className="w-full bg-neutral-50 border-t border-neutral-100 text-black"
      dir="rtl"
    >
      {/* ── بخش اصلی ── */}
      <div className="mx-auto px-5 sm:px-8 lg:px-17 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] gap-10 lg:gap-8">

          {/* ستون ۱: برند */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/logo-footer.png"
                alt="لوگوی گالری طلا"
                width={110}
                height={55}
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-[13px] leading-[2.1] text-neutral-500 text-justify max-w-[280px] mb-7">
              گالری طلای امیری با سال‌ها تجربه در عرضه زیورآلات اصیل ایرانی،
              با عشق به هنر طلاسازی و تعهد به اصالت، لحظه‌های ماندگار شما را
              همراهی می‌کند.
            </p>

            {/* شبکه‌های اجتماعی */}
            <div>
              <p className="text-[12px] text-neutral-400 mb-3">ما را دنبال کنید</p>
              <div className="flex items-center gap-2">
                {socials.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-400 hover:bg-[#10494b] hover:border-[#10494b] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ستون ۲: دسته‌بندی‌ها */}
          <NavList title="دسته‌بندی‌ها" items={categories} />

          {/* ستون ۳: دسترسی سریع */}
          <NavList title="دسترسی سریع" items={quickLinks} />

          {/* ستون ۴: قوانین و پشتیبانی */}
          <NavList title="قوانین و پشتیبانی" items={legalLinks} />

          {/* ستون ۵: تماس + نماد */}
          <div>
            <h3 className="text-[14px] font-bold mb-5 text-[#10494b] tracking-wide flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[#10494b] inline-block" />
              اطلاعات تماس
            </h3>
            <ul className="space-y-4 text-[13px] text-neutral-500 mb-7">
              <li className="flex items-start gap-2.5 leading-[1.9]">
                <HiOutlineLocationMarker className="w-4 h-4 mt-0.5 shrink-0 text-[#10494b]" />
                <span>تهران، سعادت‌آباد، میدان کتاب، بلوار کوهستان، خیابان ۲۴، واحد ۸</span>
              </li>
              <li>
                <a
                  href="tel:02122338556"
                  className="flex items-center gap-2.5 hover:text-[#10494b] transition-colors duration-200 group"
                >
                  <FiPhoneCall className="w-4 h-4 shrink-0 text-[#10494b]" />
                  <span dir="ltr" className="group-hover:tracking-wide transition-all duration-200">۰۲۱-۲۲۳۳۸۵۵۶</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@linagoldgallery.ir"
                  className="flex items-center gap-2.5 hover:text-[#10494b] transition-colors duration-200"
                >
                  <HiOutlineMail className="w-4 h-4 shrink-0 text-[#10494b]" />
                  <span dir="ltr" className="text-[12.5px]">info@linagoldgallery.ir</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlineClock className="w-4 h-4 shrink-0 text-[#10494b]" />
                <span>همه‌روزه ۱۰ صبح تا ۱۰ شب</span>
              </li>
            </ul>

            {/* نماد اعتماد */}
            <div className="w-[100px] h-[68px] bg-white border border-neutral-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <Image
                src="/images/enamad.png"
                alt="نماد اعتماد الکترونیکی"
                width={80}
                height={50}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── نوار تخفیف / خبرنامه ── */}
      <div className="border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-neutral-500 text-center sm:text-right">
            🎁 با ثبت ایمیل، از تخفیف‌های ویژه و جدیدترین محصولات باخبر شوید
          </p>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="ایمیل شما..."
              dir="ltr"
              className="flex-1 sm:w-56 text-[13px] px-4 py-2.5 rounded-xl border border-neutral-200 outline-none focus:border-[#10494b] focus:ring-2 focus:ring-[#10494b]/10 transition-all duration-200 bg-neutral-50"
            />
            <button className="px-5 py-2.5 bg-[#10494b] text-white text-[13px] font-semibold rounded-xl hover:bg-[#0d3e40] active:scale-95 transition-all duration-200 whitespace-nowrap">
              عضویت
            </button>
          </div>
        </div>
      </div>

      {/* ── کپی‌رایت ── */}
      <div className="border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-neutral-400">
          <p className="text-center sm:text-right">
            © ۱۴۰۴ — کلیه حقوق مادی و معنوی این سایت برای گالری طلای امیری محفوظ است
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-[#10494b] transition-colors duration-200">قوانین</Link>
            <Link href="/privacy" className="hover:text-[#10494b] transition-colors duration-200">حریم خصوصی</Link>
            <span className="text-neutral-300">|</span>
            <p className="whitespace-nowrap">طراحی:  امیری</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
