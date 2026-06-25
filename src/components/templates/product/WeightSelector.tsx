"use client";

import React, { useState } from "react";

interface WeightSelectorProps {
  weights: number[];
  defaultWeight: number;
}

const WeightSelector = ({ weights, defaultWeight }: WeightSelectorProps) => {
  const [selected, setSelected] = useState<number>(defaultWeight);

  return (
    <div>
      <p className="text-sm font-bold text-gray-800 mb-3">
        سایز: <span className="text-[#10494b]">{selected} گرم</span>
      </p>

      <div className="flex flex-wrap gap-2.5">
        {weights.map((w) => (
          <button
            key={w}
            onClick={() => setSelected(w)}
            className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors flex items-center gap-1 ${
              selected === w
                ? "border-[#10494b] text-[#10494b] bg-[#10494b]/5"
                : "border-neutral-300 text-neutral-600 hover:border-[#10494b]/40"
            }`}
          >
            {new Intl.NumberFormat("fa-IR").format(w)} گرم
            {selected === w && <span className="text-xs">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeightSelector;