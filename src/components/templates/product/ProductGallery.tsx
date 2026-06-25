"use client";

import React, { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

const ProductGallery = ({ images, title }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-neutral-50 rounded-2xl flex items-center justify-center p-6 min-h-[320px] md:min-h-[380px]">
        <img
          src={activeImage}
          alt={title}
          className="max-w-full max-h-[260px] md:max-h-[320px] object-contain"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`relative shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-colors ${
                activeImage === img
                  ? "border-[#10494b]"
                  : "border-neutral-200 hover:border-[#10494b]/40"
              }`}
            >
              <img src={img} alt={`${title} - ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;