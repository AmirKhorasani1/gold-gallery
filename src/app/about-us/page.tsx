import React from "react";
import Link from "next/link";
import { FiAward, FiUsers, FiShield, FiTruck } from "react-icons/fi";
import { GiDiamondRing } from "react-icons/gi";
import Navbar from "../../components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import { getCurrentUser } from "@/utils/auth";

const AboutPage = async () => {
  const user = await getCurrentUser();

  return (
    <div dir="rtl" className="bg-white">
      <Navbar isLogin={!!user}  />
      {/* ================= HERO ================= */}
      <section className="relative bg-[#10494b] text-white overflow-hidden pt-33">
        {/* Decorative ring outlines */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-80 h-80 rounded-full border-[28px] border-white/5" />
        <div className="absolute -bottom-24 -right-20 w-72 h-72 rounded-full border-[20px] border-white/[0.04]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[#d4af37] mb-4">
            از سال ۱۳۷۸ تا امروز
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            گالری طلای امیری
          </h1>
          <p className="text-sm md:text-base text-white/80 leading-8 max-w-2xl mx-auto">
            بیش از دو دهه است که در کنار خانواده‌های ایرانی هستیم؛ از هدیه‌ی نامزدی تا سکه‌ی روز تولد.
            هر قطعه‌ای که می‌سازیم، حاصل دقت دستان استادکاران ماست و هر مشتری برای ما یک امانت‌دار است.
          </p>
        </div>
      </section>

        <Breadcrumb
          links={[
            { id: 1, title: "خانه", to: "/" },
            { id: 2, title: "درباره ما", to: "/about-us" },
          ]}
        />

      {/* ================= STORY ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          <div>
            <span className="text-xs font-semibold text-[#10494b] tracking-widest">داستان ما</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3 mb-5 leading-relaxed">
              از یک ویترین کوچک در بازار، تا گالری مورد اعتماد خانواده‌ها
            </h2>
            <p className="text-sm md:text-base text-gray-500 leading-8 mb-4">
              گالری طلای امیری کار خود را با یک کارگاه کوچک طلاسازی آغاز کرد. هدف ساده بود: ساخت زیورآلاتی
              که علاوه بر زیبایی، ارزش واقعی داشته باشند و سال‌ها در کنار صاحبشان بمانند.
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-8">
              امروز، با حفظ همان دقت دستی در طراحی و عیارسنجی، محصولات‌مان را به‌صورت آنلاین نیز عرضه می‌کنیم
              تا مشتریان در سراسر ایران بتوانند با اطمینان از اصالت و کیفیت کالا، خریدی آرام و مطمئن داشته باشند.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#10494b]/5 to-[#d4af37]/10 flex items-center justify-center">
              <GiDiamondRing size={120} className="text-[#10494b]/30" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg border border-neutral-100 px-6 py-4 text-center">
              <p className="text-2xl font-bold text-[#10494b]">+۲۵</p>
              <p className="text-xs text-gray-500 mt-1">سال تجربه</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#10494b] tracking-widest">چرا امیری</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">
              تعهدی که در هر قطعه می‌بینید
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white rounded-2xl p-6 text-center border border-neutral-100 hover:border-[#10494b]/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#10494b]/10 flex items-center justify-center mx-auto mb-4">
                <FiAward size={22} className="text-[#10494b]" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">عیار تضمینی</h3>
              <p className="text-xs text-gray-500 leading-6">
                تمامی محصولات با مهر عیارسنجی معتبر و گارانتی اصالت عرضه می‌شوند.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-neutral-100 hover:border-[#10494b]/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#10494b]/10 flex items-center justify-center mx-auto mb-4">
                <FiUsers size={22} className="text-[#10494b]" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">مشاوره تخصصی</h3>
              <p className="text-xs text-gray-500 leading-6">
                تیم ما در انتخاب طرح متناسب با ذوق و بودجه شما همراه‌تان است.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-neutral-100 hover:border-[#10494b]/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#10494b]/10 flex items-center justify-center mx-auto mb-4">
                <FiShield size={22} className="text-[#10494b]" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">خریدی امن</h3>
              <p className="text-xs text-gray-500 leading-6">
                پرداخت امن، فاکتور رسمی و امکان مرجوعی طبق ضوابط فروشگاه.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-neutral-100 hover:border-[#10494b]/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#10494b]/10 flex items-center justify-center mx-auto mb-4">
                <FiTruck size={22} className="text-[#10494b]" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">ارسال مطمئن</h3>
              <p className="text-xs text-gray-500 leading-6">
                ارسال با بسته‌بندی ایمن و بیمه‌شده به سراسر کشور.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#10494b]">+۲۵</p>
            <p className="text-xs md:text-sm text-gray-500 mt-2">سال فعالیت</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#10494b]">+۱۲۰۰۰</p>
            <p className="text-xs md:text-sm text-gray-500 mt-2">مشتری راضی</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#10494b]">+۸۰۰</p>
            <p className="text-xs md:text-sm text-gray-500 mt-2">طرح اختصاصی</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#10494b]">۱۸ و ۲۴</p>
            <p className="text-xs md:text-sm text-gray-500 mt-2">عیار طلای موجود</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#10494b] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-[20px] border-white/5 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-14 md:py-20 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            آماده‌ای انتخاب بعدی‌ات را پیدا کنی؟
          </h2>
          <p className="text-sm text-white/70 mb-8 leading-7">
            مجموعه‌ای از انگشترها، گردنبندها و سکه‌های طلا را در گالری ما ببین، یا با تیم ما برای مشاوره تماس بگیر.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-white text-[#10494b] text-sm font-semibold hover:bg-neutral-100 transition-colors"
            >
              مشاهده محصولات
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 rounded-2xl border-2 border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
};

export default AboutPage;