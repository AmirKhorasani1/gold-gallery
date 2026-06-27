import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const contactItems = [
  {
    icon: <HiOutlineLocationMarker className="w-5 h-5" />,
    label: "آدرس",
    value: "تهران، سعادت‌آباد، میدان کتاب، بلوار کوهستان، خیابان ۲۴، واحد ۸",
  },
  {
    icon: <FiPhoneCall className="w-5 h-5" />,
    label: "تلفن تماس",
    value: "۰۲۱-۲۲۳۳۸۵۵۶",
    href: "tel:02122338556",
  },
  {
    icon: <HiOutlineMail className="w-5 h-5" />,
    label: "ایمیل",
    value: "info@amirigoldgallery.ir",
    href: "mailto:info@amirigoldgallery.ir",
    dir: "ltr" as const,
  },
  {
    icon: <HiOutlineClock className="w-5 h-5" />,
    label: "ساعات کاری",
    value: "همه‌روزه از ۱۰ صبح تا ۱۰ شب",
  },
  {
    icon: <FaTelegramPlane className="w-5 h-5" />,
    label: "واتساپ / تلگرام",
    value: "۰۹۱۲۳۴۵۶۷۸۹",
    href: "https://t.me/",
  },
];

export default function ContactInformation() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div>
        <p className="text-xs text-[#10494b] font-semibold tracking-widest mb-1">تماس با ما</p>
        <h2 className="text-xl md:text-2xl font-black text-neutral-800 font-yekan">
          اطلاعات تماس
        </h2>
        <div className="w-10 h-1 bg-[#10494b] rounded-full mt-3" />
      </div>

      <p className="text-sm text-neutral-500 leading-7">
        خوشحال می‌شویم نظرات، پیشنهادات یا سوالات شما را بشنویم. تیم پشتیبانی
        ما در سریع‌ترین زمان ممکن پاسخگو خواهد بود.
      </p>

      <div className="flex flex-col gap-3">
        {contactItems.map(({ icon, label, value, href, dir }) => (
          <div
            key={label}
            className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-neutral-100 hover:border-[#10494b]/20 hover:shadow-sm transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#10494b]/8 flex items-center justify-center shrink-0 text-[#10494b] group-hover:bg-[#10494b] group-hover:text-white transition-all duration-200">
              {icon}
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[11px] text-neutral-400 font-medium">{label}</span>
              {href ? (
                <a
                  href={href}
                  dir={dir}
                  className="text-[13.5px] text-neutral-700 hover:text-[#10494b] transition-colors duration-200 font-medium break-all"
                >
                  {value}
                </a>
              ) : (
                <span dir={dir} className="text-[13.5px] text-neutral-700 leading-6">{value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-1">
        <span className="text-xs text-neutral-400">ما را دنبال کنید:</span>
        {[
          { href: "https://t.me/", icon: <FaTelegramPlane className="w-4 h-4" />, label: "تلگرام" },
          { href: "https://wa.me/", icon: <FaWhatsapp className="w-4 h-4" />, label: "واتساپ" },
        ].map(({ href, icon, label }) => (
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
  );
}
