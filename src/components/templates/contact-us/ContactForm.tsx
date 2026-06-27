"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useToast } from "@/components/ui/Toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const { show } = useToast();

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      show({
        type: "warning",
        title: "فیلدهای الزامی",
        message: "لطفاً نام، ایمیل و پیام را پر کنید",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        show({
          type: "error",
          title: "خطا در ارسال",
          message: data.message || "لطفاً دوباره تلاش کنید",
        });
        return;
      }

      show({
        type: "success",
        title: "پیام ارسال شد",
        message: "به زودی با شما تماس می‌گیریم",
      });

      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      show({
        type: "error",
        title: "خطای اتصال",
        message: "ارتباط با سرور برقرار نشد",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 md:p-8 h-full">
      <div className="mb-7">
        <p className="text-xs text-[#10494b] font-semibold tracking-widest mb-1">
          فرم تماس با ما
        </p>
        <h2 className="text-xl md:text-2xl font-black text-neutral-800 font-yekan">
          برای تماس با ما فرم زیر را تکمیل کنید
        </h2>
        <div className="w-10 h-1 bg-[#10494b] rounded-full mt-3" />
      </div>

      <div className="flex flex-col gap-5">
        {/* ردیف اول: نام + ایمیل */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-neutral-600">
              نام و نام خانوادگی <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="مثال: علی احمدی"
              className="px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-300 outline-none focus:border-[#10494b] focus:ring-2 focus:ring-[#10494b]/10 transition-all duration-200 bg-neutral-50 focus:bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-neutral-600">
              آدرس ایمیل <span className="text-rose-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              dir="ltr"
              className="px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-300 outline-none focus:border-[#10494b] focus:ring-2 focus:ring-[#10494b]/10 transition-all duration-200 bg-neutral-50 focus:bg-white"
            />
          </div>
        </div>

        {/* ردیف دوم: تلفن + شرکت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-neutral-600">
              شماره تماس
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              dir="ltr"
              className="px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-300 outline-none focus:border-[#10494b] focus:ring-2 focus:ring-[#10494b]/10 transition-all duration-200 bg-neutral-50 focus:bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-neutral-600">
              نام شرکت
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="اختیاری"
              className="px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-300 outline-none focus:border-[#10494b] focus:ring-2 focus:ring-[#10494b]/10 transition-all duration-200 bg-neutral-50 focus:bg-white"
            />
          </div>
        </div>

        {/* پیام */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-neutral-600">
            درخواست شما <span className="text-rose-400">*</span>
          </label>
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="پیام خود را اینجا بنویسید..."
            className="px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-300 outline-none focus:border-[#10494b] focus:ring-2 focus:ring-[#10494b]/10 transition-all duration-200 bg-neutral-50 focus:bg-white resize-none leading-7"
          />
        </div>

        {/* دکمه */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#10494b] text-white text-sm font-semibold rounded-xl hover:bg-[#0d3e40] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-[#10494b]/20 hover:shadow-lg hover:shadow-[#10494b]/25"
        >
          <FiSend className="w-4 h-4" />
          {loading ? "در حال ارسال..." : "ارسال پیام"}
        </button>

        <p className="text-[11.5px] text-neutral-400 text-center">
          معمولاً ظرف ۲۴ ساعت پاسخ می‌دهیم
        </p>
      </div>
    </div>
  );
}