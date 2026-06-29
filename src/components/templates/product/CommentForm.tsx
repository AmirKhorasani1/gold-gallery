"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaCheckCircle } from "react-icons/fa";
import { CommentItem } from "./ProductComments";

interface CommentFormProps {
  productId: string;
  onCommentAdded: (comment: CommentItem) => void;
  userEmail: string;
  userName: string;
}

interface FieldErrors {
  body?: string;
  general?: string;
}

const CommentForm = ({ productId, onCommentAdded, userEmail, userName }: CommentFormProps) => {
  const [body, setBody] = useState<string>("");
  const [score, setScore] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleCommentSubmit = async () => {
    setFieldErrors({});
    if (!body.trim()) {
      setFieldErrors({ body: "متن دیدگاه نمی‌تواند خالی باشد" });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          email: userEmail,
          body,
          score,
          productID: productId,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setFieldErrors({ general: data.message || "خطایی در ثبت دیدگاه رخ داد" });
        return;
      }

      onCommentAdded(data.data);
      setShowToast(true);
      setBody("");
      setScore(5);
    } catch {
      setFieldErrors({ general: "ارتباط با سرور برقرار نشد. مجدداً تلاش کنید" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {showToast && (
        <div className="fixed top-5 right-5 z-50 flex flex-col w-80 bg-white shadow-2xl rounded-xl overflow-hidden border border-emerald-100">
          <div className="flex items-center gap-3 p-4">
            <FaCheckCircle className="text-emerald-500 text-xl shrink-0" />
            <div className="flex flex-col gap-0.5 text-right">
              <span className="font-bold text-sm text-gray-800">عملیات موفق</span>
              <span className="text-xs text-gray-500">دیدگاه شما با موفقیت ثبت شد.</span>
            </div>
          </div>
          <div className="w-full h-1 bg-emerald-100">
            <div className="h-full bg-emerald-500 rounded-full" style={{ animation: "shrinkWidth 4s linear forwards" }} />
          </div>
        </div>
      )}

      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6">ثبت دیدگاه شما</h2>

      {fieldErrors.general && (
        <div className="mb-4 text-sm text-rose-600 bg-rose-50 rounded-xl px-4 py-3 text-right">
          {fieldErrors.general}
        </div>
      )}

      <div className="flex flex-col gap-4 text-right">
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">امتیاز شما</p>
          <div className="flex items-center gap-1 text-2xl text-[#10494b]">
            {Array.from({ length: 5 }).map((_, i) => (
              <button key={i} type="button" onClick={() => setScore(i + 1)}>
                {i < score ? <FaStar size={20} /> : <FaRegStar size={20} />}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <textarea
            placeholder="دیدگاه خود را بنویسید..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={5}
            className={`w-full px-4 py-3 border rounded-2xl text-sm text-right text-gray-700 bg-white outline-none focus:ring-2 transition resize-none ${
              fieldErrors.body
                ? "border-rose-400 focus:ring-rose-500/10"
                : "border-gray-300 focus:border-[#10494b] focus:ring-[#10494b]/10"
            }`}
          />
          {fieldErrors.body && (
            <span className="text-xs text-rose-500 mr-2">{fieldErrors.body}</span>
          )}
        </div>

        <button
          type="button"
          onClick={handleCommentSubmit}
          disabled={isLoading}
          className="w-36 py-3 bg-[#10494b] text-white rounded-2xl text-sm font-semibold hover:bg-[#0d3e40] transition-colors disabled:opacity-60 flex justify-center items-center"
        >
          {isLoading ? "در حال ارسال..." : "ثبت دیدگاه"}
        </button>
      </div>
    </div>
  );
};

export default CommentForm;