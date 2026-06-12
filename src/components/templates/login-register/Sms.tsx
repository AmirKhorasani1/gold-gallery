import React from 'react'

interface SmsProps {
  hideOtpForm: () => void;
}

const Sms = ({ hideOtpForm } : SmsProps) => {
  return (
    <>
      <h2 className="flex items-center gap-2 text-base font-semibold text-gray-800 mb-2">
        <span>←</span>  ورود با کد یکبار مصرف
      </h2>

      <div className="mb-3">
        <h3 className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-5">
          لطفا کد تایید ارسال شده به شماره x را وارد کنید
        </h3>
        <input
          type="text"
          placeholder="کد یکبار مصرف"
          maxLength={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm text-right text-gray-700 bg-white outline-none focus:border-[#10494b] focus:ring-2 focus:ring-[#10494b]/10 transition"
        />
      </div>

      {/* OTP Section */}
      <div className="mt-5">
        <button
          type="button"
          className="w-full py-3 bg-[#10494b] text-white rounded-2xl text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          ثبت کد تایید
        </button>
        <p className="text-center gap-1 text-xs text-gray-500 font-medium mt-4">
          ارسال مجدد کد یکبار مصرف
        </p>
        <p onClick={hideOtpForm} className="text-center cursor-pointer gap-1 text-xs text-gray-700 font-semibold mt-4">
          لغو
        </p>
      </div>
    </>
  )
}

export default Sms