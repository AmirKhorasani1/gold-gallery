"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sms from "./Sms";
import { isValidEmail, isValidPhone, isValidPassword } from "@/utils/validation"

interface RegisterProps {
  onSwitchToLogin: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
}

const Register = ({ onSwitchToLogin }: RegisterProps) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState<boolean>(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const hideOtpForm = () => {
    setIsRegisterWithOtp(false);
  };

  const validateBaseFields = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "نام و نام خانوادگی الزامی است";
    } else if (name.trim().length < 3) {
      newErrors.name = "نام باید حداقل ۳ کاراکتر باشد";
    } else if (name.trim().length > 50) {
      newErrors.name = "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد";
    }

    if (!phone.trim()) {
      newErrors.phone = "شماره همراه الزامی است";
    } else if (!isValidPhone(phone)) {
      newErrors.phone = "شماره همراه باید با ۰۹ شروع شده و ۱۱ رقم باشد";
    }
    
    return newErrors;
  };

  const validatePasswordForm = (): FormErrors => {
    const newErrors = validateBaseFields();

    if (email.trim() && !isValidEmail(email)) {
      newErrors.email = "فرمت ایمیل وارد شده صحیح نیست";
    }

    if (!password) {
      newErrors.password = "رمز عبور الزامی است";
    } else if (!isValidPassword(password)) {
      newErrors.password =
        "رمز عبور باید حداقل ۸ کاراکتر، شامل حرف بزرگ، حرف کوچک و عدد باشد";
    }

    return newErrors;
  };

  // اعتبارسنجی برای ثبت‌نام با OTP
  const validateOtpForm = (): FormErrors => {
    const newErrors = validateBaseFields();

    if (email.trim() && !isValidEmail(email)) {
      newErrors.email = "فرمت ایمیل وارد شده صحیح نیست";
    }

    return newErrors;
  };

  const handleOtpRegister = () => {
    const newErrors = validateOtpForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsRegisterWithOtp(true);
    }
  };

  const handlePasswordToggleOrSubmit = async () => {
    if (!isRegisterWithPass) {
      setIsRegisterWithPass(true);
      return;
    }

    const newErrors = validatePasswordForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    await signUp();
  };

  const signUp = async () => {
    setIsLoading(true);
    try {
      const user = { name: name.trim(), phone: phone.trim(), email: email.trim(), password };

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.status === 201) {
        router.push("/");
        router.refresh();
        alert("ثبت‌نام با موفقیت انجام شد");
      } else if (res.status === 409) {
        setErrors({ phone: data.message || "این شماره یا ایمیل قبلاً ثبت شده است" });
      } else {
        alert(data.message || "خطایی رخ داده است. لطفاً دوباره تلاش کنید");
      }
    } catch {
      alert("خطا در برقراری ارتباط با سرور");
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 border rounded-2xl text-sm text-right text-gray-700 bg-white outline-none transition";
  const inputNormal = `${inputBase} border-gray-300 focus:border-[#10494b] focus:ring-2 focus:ring-[#10494b]/10`;
  const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10`;

  const getInputClass = (field: keyof FormErrors) =>
    errors[field] ? inputError : inputNormal;

  return (
    <div dir="rtl">
      {!isRegisterWithOtp ? (
        <div>
          <h2 className="flex items-center gap-2 text-base font-semibold text-gray-800 mb-5">
            <span>←</span> ایجاد حساب کاربری جدید
          </h2>
          <p className="text-sm text-gray-500 mb-4 text-right">
            اطلاعات حساب کاربری خود را تکمیل کنید.
          </p>

          {/* نام */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              className={getInputClass("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 text-right">{errors.name}</p>
            )}
          </div>

          {/* تلفن */}
          <div className="mb-3">
            <input
              type="tel"
              placeholder="شماره همراه (مثال: ۰۹۱۳۴۵۶۷۸۹)"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              className={getInputClass("phone")}
              maxLength={11}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 text-right">{errors.phone}</p>
            )}
          </div>

          {/* ایمیل */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="آدرس ایمیل (اختیاری)"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              className={getInputClass("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 text-right">{errors.email}</p>
            )}
          </div>

          {/* رمز عبور */}
          {isRegisterWithPass && (
            <div className="mb-3">
              <input
                type="password"
                placeholder="رمز عبور (حداقل ۸ کاراکتر)"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                }}
                className={getInputClass("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 text-right">{errors.password}</p>
              )}
            </div>
          )}

          <button
            onClick={handleOtpRegister}
            disabled={isLoading}
            className="w-full mt-4 py-3 bg-[#10494b] text-white rounded-2xl text-sm font-semibold hover:bg-[#0d3e40] disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            ثبت‌نام با کد تایید
          </button>

          <button
            onClick={handlePasswordToggleOrSubmit}
            disabled={isLoading}
            className="w-full mt-2 py-3 bg-[#10494b] text-white rounded-2xl text-sm font-semibold hover:bg-[#0d3e40] disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {isLoading ? "در حال ثبت‌نام..." : "ثبت‌نام با رمز عبور"}
          </button>

          <p className="text-sm text-gray-500 mt-4 text-center">
            حساب کاربری دارید؟{" "}
            <span
              onClick={onSwitchToLogin}
              className="text-[#10494b] font-semibold cursor-pointer hover:underline"
            >
              وارد شوید
            </span>
          </p>
        </div>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </div>
  );
};

export default Register;