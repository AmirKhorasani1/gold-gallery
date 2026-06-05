import React, { useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiArrowLeft } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

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

const MegaMenu = () => {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]?.id);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowCategories(true)}
      onMouseLeave={() => setShowCategories(false)}
    >
      <button className="flex cursor-pointer items-center gap-1.5 text-sm font-semibold">
        دسته بندی جواهرات{" "}
        <IoIosArrowForward className={`${showCategories ? "rotate-270" : "rotate-90"}`} />
      </button>

      <div
        className={`absolute right-0 top-12 w-[550px] rounded-2xl border border-black/10 bg-white shadow-xs transition-all duration-500 ${
          showCategories ? "visible translate-y-0 opacity-100" : "invisible translate-y-5 opacity-0"
        }`}
      >
        <div className="flex p-4">
          <div className="w-140 flex flex-col gap-1 pl-4">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                className={`flex cursor-pointer items-center justify-between rounded-xl p-2 pl-4 font-semibold transition ${
                  activeCategory === cat.id ? "bg-neutral-200/45 text-black" : "hover:bg-black"
                }`}
              >
                <div className="flex items-center gap-2.5 text-[14.5px] font-semibold [word-spacing:-2px]">
                  <img className="w-11 rounded-full" src={cat.icon} alt={cat.title} />
                  <span>{cat.title}</span>
                </div>
                <FiChevronLeft size={19} className={activeCategory === cat.id ? "text-black/50" : "text-black/0"} />
              </div>
            ))}
          </div>

          <div className="relative flex w-full flex-col gap-0.5 rounded-xl bg-neutral-200/35 p-2">
            {CATEGORIES.find((c) => c.id === activeCategory)?.items.map((item, index) => (
              <div key={index} className="relative flex cursor-pointer items-center gap-2 rounded-xl pr-2 text-xl text-black transition hover:bg-[#ffecd2] hover:text-[#C4882E] py-2">
                <img src={item.icon} className="w-11 rounded-full" alt={item.name} />
                <span className="text-sm font-medium">{item.name}</span>
                <FiChevronLeft size={19} className="absolute left-3 top-1/3 text-neutral-400" />
              </div>
            ))}
            
            <Link href={"/jewelry/"}>
              <button className="m-3 mr-25.5 flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#10494b] hover:text-[#027275]">
                کلکسیون جواهرات <FiArrowLeft size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;