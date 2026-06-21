"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sms from "./Sms";
import { isValidEmail, isValidPhone, isValidPassword } from "@/utils/validation"

interface LoginProps {
  onSwitchToRegister: () => void;
}

type LoginMethod = "password" | "otp";

interface FormErrors {
  phoneOrEmail?: string;
  password?: string;
}

const Login = ({ onSwitchToRegister }: LoginProps) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState<boolean>(false);
  const [loginMethod, setLoginMethod] = useState<LoginMethod>("password");
  const [phoneOrEmail, setPhoneOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const router = useRouter();
  
  const hideOtpForm = () => {
    setIsLoginWithOtp(false);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!phoneOrEmail.trim()) {
      newErrors.phoneOrEmail = "شماره همراه یا ایمیل الزامی است";
    } else if (
      !isValidPhone(phoneOrEmail.trim()) &&
      !isValidEmail(phoneOrEmail.trim())
    ) {
      newErrors.phoneOrEmail = "شماره همراه یا ایمیل وارد شده معتبر نیست";
    }

    if (!password) {
      newErrors.password = "رمز عبور الزامی است";
    } else if (!isValidPassword(password)) {
      newErrors.password =
        "رمز عبور باید حداقل ۸ کاراکتر، شامل حرف بزرگ، حرف کوچک و عدد باشد";
    }

    return newErrors;
  };

  const validateOtpForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!phoneOrEmail.trim()) {
      newErrors.phoneOrEmail = "شماره همراه یا ایمیل الزامی است";
    } else if (
      !isValidPhone(phoneOrEmail.trim()) &&
      !isValidEmail(phoneOrEmail.trim())
    ) {
      newErrors.phoneOrEmail = "شماره همراه یا ایمیل وارد شده معتبر نیست";
    }

    return newErrors;
  };

  const loginWithPassword = async () => {
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setIsLoading(true);

    try {
      const user = {
        phoneOrEmail: phoneOrEmail.trim(),
        password,
        remember,
      }

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log(data)
      if (res.status === 200) {
        router.push("/");
        router.refresh();
      } else if (res.status === 401 || res.status === 422) {
        setErrors({ password: data.message || "شماره همراه/ایمیل یا رمز عبور اشتباه است" });
      } else if (res.status === 404) {
        setErrors({ phoneOrEmail: data.message || "کاربری با این مشخصات یافت نشد" });
      } else {
        alert(data.message || "خطایی رخ داده است. لطفاً دوباره تلاش کنید");
      }
    } catch {
      alert("خطا در برقراری ارتباط با سرور");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpLogin = () => {
    const newErrors = validateOtpForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsLoginWithOtp(true);
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
      {!isLoginWithOtp ? (
        <>
          <div>
            <h2 className="flex items-center gap-2 text-base font-semibold text-gray-800 mb-6">
              <span>←</span> وارد حساب کاربری خود شوید
            </h2>

            {/* Phone or Email */}
            <div className="mb-3">
              <input
                type="tel"
                placeholder="شماره همراه / ایمیل"
                value={phoneOrEmail}
                onChange={(e) => {
                  setPhoneOrEmail(e.target.value);
                  if (errors.phoneOrEmail)
                    setErrors((prev) => ({ ...prev, phoneOrEmail: undefined }));
                }}
                className={getInputClass("phoneOrEmail")}
              />
              {errors.phoneOrEmail && (
                <p className="text-red-500 text-xs mt-1 text-right">
                  {errors.phoneOrEmail}
                </p>
              )}
            </div>

            {/* Password */}
            {loginMethod === "password" && (
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="پسورد"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password)
                      setErrors((prev) => ({ ...prev, password: undefined }));
                  }}
                  className={getInputClass("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1 text-right">
                    {errors.password}
                  </p>
                )}
              </div>
            )}

            {/* Remember me */}
            <div
              className="flex items-center gap-2 mt-4 mb-1 cursor-pointer select-none"
              onClick={() => setRemember(!remember)}
            >
              <div
                className={`w-[18px] h-[18px] rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                  remember
                    ? "bg-[#10494b] border-[#10494b]"
                    : "bg-white border-gray-300"
                }`}
              >
                {remember && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-600">مرا به خاطر بسپار</span>
            </div>

            {/* Password login button */}
            {loginMethod === "password" && (
              <button
                type="button"
                onClick={loginWithPassword}
                disabled={isLoading}
                className="w-full mt-4 py-3 bg-[#10494b] text-white rounded-2xl text-sm font-semibold hover:bg-[#0d3e40] disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {isLoading ? "در حال ورود..." : "ورود"}
              </button>
            )}

            <Link href={"/forgot-password"}>
              <p className="text-sm font-medium text-[#10494b] cursor-pointer mt-4 text-center">
                رمزعبور خود را فراموش کرده‌اید؟
              </p>
            </Link>

            <button
              onClick={handleOtpLogin}
              disabled={isLoading}
              type="button"
              className="w-full mt-4 py-3 bg-[#10494b] text-white rounded-2xl text-sm font-semibold hover:bg-[#0d3e40] disabled:opacity-60 disabled:cursor-not-allowed transition cursor-pointer"
            >
              ورود با کد یکبار مصرف
            </button>

            <p className="text-sm text-gray-500 text-center mt-2">
              حساب کاربری ندارید؟{" "}
              <span
                onClick={onSwitchToRegister}
                className="text-[#10494b] font-semibold cursor-pointer hover:underline"
              >
                ثبت نام کنید
              </span>
            </p>
          </div>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </div>
  );
};

export default Login;