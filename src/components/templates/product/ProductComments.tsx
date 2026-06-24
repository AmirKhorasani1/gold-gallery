"use client";

import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import CommentForm from "./CommentForm";

export interface CommentItem {
  _id?: string;
  username: string;
  body: string;
  score: number;
  isAccept: boolean
  date?: string;
}

interface ProductCommentsProps {
  productId: string;
  initialComments: CommentItem[];
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5 text-[#10494b]">
    {Array.from({ length: 5 }).map((_, i) =>
      i < rating ? <FaStar key={i} size={13} /> : <FaRegStar key={i} size={13} />
    )}
  </div>
);

const formatDate = (iso?: string) => {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("fa-IR").format(new Date(iso));
  } catch {
    return "";
  }
};

const ProductComments = ({ productId, initialComments }: ProductCommentsProps) => {
  const [comments, setComments] = useState<CommentItem[]>(initialComments);

  const acceptedComments = comments.filter((comment) => comment.isAccept);

  const handleCommentAdded = (newComment: CommentItem) => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16">
      {/* Comments list */}
      <div>
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
          دیدگاه کاربران (
            {comments.filter(comment => comment.isAccept).length}
          )
        </h2>

        <div className="flex flex-col gap-5">
          {acceptedComments.length > 0 ? (
            acceptedComments.map((comment) => (
              <div key={comment._id ?? `${comment.username}-${comment.date}`} className="bg-white rounded-3xl p-4 md:p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-800">{comment.username}</span>
                  <span className="text-xs text-neutral-400">{formatDate(comment.date)}</span>
                </div>
                <StarRating rating={comment.score} />
                <p className="text-sm text-neutral-600 leading-7 mt-3">{comment.body}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-neutral-500">
              هنوز دیدگاهی برای این محصول ثبت نشده است.
            </p>
          )}
        </div>
      </div>

      {/* Comment form */}
      <CommentForm productId={productId} onCommentAdded={handleCommentAdded} />
    </div>
  );
};

export default ProductComments;