"use client";

import { useEffect, ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ConfirmModalAction {
  label: string;
  onClick: () => void;
  variant?: "danger" | "primary" | "secondary";
  loading?: boolean;
}

interface ConfirmModalProps {
  isOpen: boolean;
  icon?: ReactNode;
  title: string;
  description?: string;
  actions: ConfirmModalAction[];
  onClose: () => void;
}

const variantClass = {
  danger: "bg-rose-500 hover:bg-rose-600 text-white",
  primary: "bg-[#10494b] hover:bg-[#0d3c3e] text-white",
  secondary: "border border-neutral-200 text-neutral-600 hover:bg-neutral-50",
};

const ConfirmModal = ({
  isOpen,
  icon,
  title,
  description,
  actions,
  onClose,
}: ConfirmModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] w-full h-full flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md supports-[backdrop-filter]:bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-[10001] w-full max-w-sm bg-white border border-neutral-200 rounded-3xl p-6">
        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-neutral-400 hover:text-neutral-600 duration-200"
        >
          <IoCloseOutline className="text-2xl" />
        </button>

        {/* آیکون */}
        {icon && (
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center text-2xl text-neutral-600">
              {icon}
            </div>
          </div>
        )}

        {/* متن */}
        <div className="text-center mb-6">
          <h2 className="text-base font-semibold text-neutral-800 mb-1.5">{title}</h2>
          {description && (
            <p className="text-sm text-neutral-500 leading-6">{description}</p>
          )}
        </div>

        {/* دکمه‌ها */}
        <div className="flex flex-col gap-2.5">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              disabled={action.loading}
              className={`w-full py-3 rounded-4xl text-sm font-medium duration-200 disabled:opacity-60 flex items-center justify-center gap-2 ${
                variantClass[action.variant ?? "secondary"]
              }`}
            >
              {action.loading && (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              )}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;