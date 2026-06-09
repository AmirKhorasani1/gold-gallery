import React from "react";

const CollectionIntro = () => {
  return (
    <section 
      dir="rtl" 
      className="bg-white px-4 py-10 md:px-17 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16"
    >
      {/* بخش راست: توضیحات و دکمه */}
      <div className="w-full lg:w-5/12 flex flex-col items-start space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          انگشتر زربان
        </h2>
        
        <p className="text-gray-800 font-yekan text-sm font-bold md:text-base leading-8 md:leading-8 text-justify">
          اثری به یاد تاریخ پر اصالت و زیبای ایران که در قالب انگشتری از جنس طلا میتواند در دستانت
          یادآور شکوه و اصالت باشد طراحی این انگشتر برگرفته از هنر و نمادهای اصیل هخامنشی یادآور
          جنگاورانی است که با غیرت و افتخار از سرزمین پارس پاسداری میکردند. زربان حلقه ای از جاودانگی
          در دستان شما
        </p>

        <button className="bg-[#10494b] text-white px-5 py-3 rounded-2xl flex items-center gap-3 hover:bg-gray-800 transition-colors duration-300">
          <span className="text-sm md:text-base font-medium">مشاهده انگشتر زربان</span>
        </button>
      </div>

      {/* بخش چپ: ویدیو */}
      <div className="w-full lg:w-6/12 rounded-3xl overflow-hidden shadow-lg bg-gray-100 flex-shrink-0">
        <video
          src="/images/orelgallery-zarban-ring-video.webm" // مسیر ویدیوی خود را اینجا قرار دهید
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    </section>
  );
}

export default CollectionIntro