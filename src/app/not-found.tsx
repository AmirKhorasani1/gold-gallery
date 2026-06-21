import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden" dir="rtl">

      {/* Decorative ring shapes — echo jewelry motif */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 sm:-right-32 w-60 h-60 sm:w-96 sm:h-96 rounded-full border-[14px] sm:border-[24px] border-[#10494b]/5" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-24 sm:-left-40 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full border-[18px] sm:border-[32px] border-[#10494b]/[0.04]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">

        {/* 404 as a "carat / hallmark stamp" */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-[#10494b] tracking-tight" style={{ fontFamily: "var(--font-serif, serif)" }}>
            ۴۰۴
          </span>
        </div>

        {/* Hairline divider with diamond */}
        <div className="flex items-center gap-3 my-5 sm:my-6 w-full justify-center">
          <span className="h-px w-12 sm:w-16 bg-[#10494b]/20" />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <path d="M6 0L12 6L6 12L0 6Z" fill="#10494b" />
          </svg>
          <span className="h-px w-12 sm:w-16 bg-[#10494b]/20" />
        </div>

        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 px-2">
          این صفحه در گالری ما موجود نیست
        </h1>

        <p className="text-sm md:text-base text-gray-500 leading-7 mb-8 px-2">
          ممکن است آدرس وارد شده اشتباه باشد یا این محصول دیگر در ویترین ما قرار نداشته باشد.
          نگران نباشید، می‌توانید به فروشگاه برگردید و گردنبند یا انگشتر مورد علاقه‌تان را پیدا کنید.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-2xl bg-[#10494b] text-white text-sm font-semibold hover:bg-[#0d3e40] transition-colors"
          >
            بازگشت به صفحه اصلی
          </Link>
          <Link
            href="/shop"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-2xl border-2 border-[#10494b] text-[#10494b] text-sm font-semibold hover:bg-[#10494b1d] transition-colors"
          >
            مشاهده محصولات
          </Link>
        </div>

      </div>

      {/* Footer hint */}
      <p className="absolute bottom-6 sm:bottom-8 text-xs text-gray-400 text-center px-4">
        کد خطا: ۴۰۴ — صفحه پیدا نشد
      </p>
    </div>
  );
};

export default NotFound;