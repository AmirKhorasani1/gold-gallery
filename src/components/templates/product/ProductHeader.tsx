import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";

interface ProductHeaderProps {
  title: string;
  rating?: number;
  reviewsCount?: number;
  questionsCount?: number;
}

const ProductHeader = ({ title, rating, reviewsCount, questionsCount }: ProductHeaderProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg md:text-2xl font-bold text-gray-800 leading-loose font-yekan">
        {title}
      </h1>

      <div className="flex items-center gap-3.5 flex-wrap text-xs md:text-sm text-neutral-500 font-medium">
        {typeof reviewsCount === "number" && (
          <span className="flex items-center gap-1.5 text-[#10494b] bg-[#10494b]/5 py-2 px-3 rounded-4xl">
            <BiCommentDetail size={16} />
            {new Intl.NumberFormat("fa-IR").format(reviewsCount)} دیدگاه
          </span>
        )}

        {typeof questionsCount === "number" && (
          <span className="flex items-center gap-1.5 text-[#10494b] bg-[#10494b]/5 py-2 px-3 rounded-4xl">
            <HiOutlineChatBubbleLeftRight size={16} />
            {new Intl.NumberFormat("fa-IR").format(questionsCount)} پرسش
          </span>
        )}

        {typeof rating === "number" && (
          <span className="flex items-center gap-1.5 text-[#10494b] bg-[#10494b]/5 py-2 px-3 rounded-4xl">
            <FaStar size={15} />
            {new Intl.NumberFormat("fa-IR", { minimumFractionDigits: 1 }).format(rating)}
            {typeof reviewsCount === "number" && (
              <span className="text-neutral-400">
                ({new Intl.NumberFormat("fa-IR").format(reviewsCount)} خریدار)
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductHeader;