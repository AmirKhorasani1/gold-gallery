"use client";

import React, { useState } from "react";
import ProductComments, { CommentItem } from "./ProductComments";

type TabKey = "description" | "specs" | "comments" | "questions";

interface ProductFeature {
  label: string;
  value: string;
}

interface ProductTabsProps {
  productId: string;
  description?: string;
  specs?: ProductFeature[];
  comments?: CommentItem[];
  userEmail: string;
  userName: string;
}

const tabs: { key: TabKey; label: string }[] = [
  { key: "description", label: "معرفی" },
  { key: "specs", label: "مشخصات" },
  { key: "comments", label: "دیدگاه‌ها" },
  { key: "questions", label: "پرسش‌ها" },
];

const ProductTabs = ({ productId, description, specs = [], comments = [], userEmail, userName }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("description");

  return (
    <div>
      <div className="flex items-center gap-1 md:gap-2 border-b border-neutral-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 md:px-6 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.key
                ? "border-[#10494b] text-[#10494b]"
                : "border-transparent text-neutral-500 hover:text-neutral-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-6">
        {activeTab === "description" && (
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-4 border-r-2 border-[#10494b] pr-3">
              معرفی
            </h2>
            <p className="text-sm text-neutral-600 leading-8">
              {description || "توضیحی برای این محصول ثبت نشده است."}
            </p>
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-4 border-r-2 border-[#10494b] pr-3">
              مشخصات
            </h2>
            <div className="flex flex-col">
              {specs.length > 0 ? (
                specs.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-3.5 px-2 text-sm ${
                      index % 2 === 0 ? "bg-neutral-50" : "bg-white"
                    } rounded-lg`}
                  >
                    <span className="font-semibold text-gray-700">{spec.label}</span>
                    <span className="text-neutral-500">{spec.value}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-neutral-400">مشخصاتی ثبت نشده است.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "comments" && (
          <ProductComments
            productId={productId}
            initialComments={comments}
            userEmail={userEmail}
            userName={userName}
          />
        )}

        {activeTab === "questions" && (
          <div className="text-sm text-neutral-400 text-center py-10">
            هنوز پرسشی برای این محصول ثبت نشده است.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;