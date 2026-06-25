import React from "react";
import JewelryCard, { JewelryItem } from "@/components/modules/jewelrycard/JewelryCard";

interface RelatedProductsProps {
  products: JewelryItem[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
        محصولات <span className="text-[#10494b]">مرتبط</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5">
        {products.map((item) => (
          <JewelryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;