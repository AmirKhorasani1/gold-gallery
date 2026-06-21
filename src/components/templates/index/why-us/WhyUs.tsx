import React from "react";
import { FiAward, FiUsers, FiShield, FiTruck } from "react-icons/fi";

const WhyUs = () => {
  return (
    <section className="">
      <div className="px-4.5 md:px-17">
        {/* ── Section Header ── */}
        <div className="flex items-center justify-center gap-4 mb-10 sm:mb-14">
          <div className="flex-1 h-px bg-gradient-to-r from-neutral-300/80 to-transparent" />
          <h2 className="text-xl sm:text-2xl font-bold text-black font-yekan whitespace-nowrap [word-spacing:-2px] shrink-0">
            تعهدی که در هر <span className="text-[#10494b]">قطعه</span> می‌بینید
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-neutral-300/80 to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5">

          <div className="bg-white rounded-3xl p-4 md:p-8 text-center border border-neutral-100 hover:border-[#10494b]/20 transition-colors">
            <div className="w-12 h-12 md:13 md:h-13  rounded-full bg-[#10494b]/10 flex items-center justify-center mx-auto mb-4">
              <FiAward size={22} className="text-[#10494b]" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2">عیار تضمینی</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-6">
              تمامی محصولات با مهر عیارسنجی معتبر و گارانتی اصالت عرضه می‌شوند.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 text-center border border-neutral-100 hover:border-[#10494b]/20 transition-colors">
            <div className="w-12 h-12 md:13 md:h-13  rounded-full bg-[#10494b]/10 flex items-center justify-center mx-auto mb-4">
              <FiUsers size={22} className="text-[#10494b]" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2">مشاوره تخصصی</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-6">
              تیم ما در انتخاب طرح متناسب با ذوق و بودجه شما همراه‌تان است.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 text-center border border-neutral-100 hover:border-[#10494b]/20 transition-colors">
            <div className="w-12 h-12 md:13 md:h-13 rounded-full bg-[#10494b]/10 flex items-center justify-center mx-auto mb-4">
              <FiShield size={22} className="text-[#10494b]" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2">خریدی امن</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-6">
              پرداخت امن، فاکتور رسمی و امکان مرجوعی طبق ضوابط فروشگاه.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 text-center border border-neutral-100 hover:border-[#10494b]/20 transition-colors">
            <div className="w-12 h-12 md:13 md:h-13  rounded-full bg-[#10494b]/10 flex items-center justify-center mx-auto mb-4">
              <FiTruck size={22} className="text-[#10494b]" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2">ارسال مطمئن</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-6">
              ارسال با بسته‌بندی ایمن و بیمه‌شده به سراسر کشور.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;