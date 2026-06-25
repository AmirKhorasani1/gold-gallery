"use client";

import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { ProductFeature } from "@/types/product";

interface ProductFeaturesProps {
  features: ProductFeature[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const visible = expanded ? features : features.slice(0, 3);

  return (
    <div>
      <h2 className="text-sm md:text-base font-bold text-gray-800 my-4">ویژگی‌ها</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {visible.map((feature, index) => (
          <div key={index} className="bg-white rounded-3xl px-4 py-3">
            <p className="text-xs text-neutral-500 mb-1">{feature.label}</p>
            <p className="text-sm font-semibold text-gray-800">{feature.value}</p>
          </div>
        ))}
      </div>

      {features.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 mx-auto flex items-center gap-1.5 text-sm font-semibold text-[#10494b] border border-[#10494b]/30 rounded-xl px-5 py-2 hover:bg-[#10494b]/5 transition-colors"
        >
          {expanded ? "بستن ویژگی‌ها" : "مشاهده همه ویژگی‌ها"}
          {expanded ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
        </button>
      )}
    </div>
  );
};

export default ProductFeatures;