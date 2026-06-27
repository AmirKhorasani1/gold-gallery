"use client";

import { useEffect, useState, createContext, useContext, useCallback, ReactNode } from "react";
import { FiCheckCircle, FiAlertCircle, FiAlertTriangle, FiX } from "react-icons/fi";

/* ─────────────────────────────────────────
Types
───────────────────────────────────────── */
export type ToastType = "success" | "error" | "warning";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number; // ms — default 4000
}

/* ─────────────────────────────────────────
Context
───────────────────────────────────────── */
interface ToastContextType {
  show: (toast: Omit<ToastItem, "id">) => void;
}

const ToastContext = createContext<ToastContextType>({ show: () => {} });

export const useToast = () => useContext(ToastContext);

/* ─────────────────────────────────────────
Config per type
───────────────────────────────────────── */
const config: Record<
  ToastType,
  { icon: ReactNode; bg: string; border: string; title: string; bar: string; iconColor: string }
> = {
  success: {
    icon: <FiCheckCircle className="w-7 h-7" />,
    bg: "bg-white",
    border: "border-emerald-200",
    title: "text-emerald-600",
    bar: "bg-emerald-500",
    iconColor: "text-emerald-500 bg-emerald-100",
  },
  error: {
    icon: <FiAlertCircle className="w-7 h-7" />,
    bg: "bg-white",
    border: "border-rose-200",
    title: "text-rose-500",
    bar: "bg-rose-500",
    iconColor: "text-rose-500 bg-rose-100",
  },
  warning: {
    icon: <FiAlertTriangle className="w-7 h-7" />,
    bg: "bg-white",
    border: "border-orange-200",
    title: "text-orange-500",
    bar: "bg-orange-400",
    iconColor: "text-orange-500 bg-orange-100",
  },
};

/* ─────────────────────────────────────────
Single Toast
───────────────────────────────────────── */
function ToastCard({
  toast,
  onRemove,
}: {
  toast: ToastItem;
  onRemove: (id: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const duration = toast.duration ?? 9000;
  const c = config[toast.type];

  // mount animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  // progress bar — counts down from 100 to 0
  useEffect(() => {
    const interval = 30;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [duration]);

  // auto-dismiss
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onRemove(toast.id), 300);
    }, duration);
    return () => clearTimeout(t);
  }, [toast.id, duration, onRemove]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onRemove(toast.id), 300);
  };

  return (
    <div
      className={`
        relative w-80 rounded-full shadow-lg overflow-hidden border border-neutral-200
        transition-all duration-300 ease-out
        ${c.bg}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
      `}
    >
      {/* body */}
      <div className="flex items-start gap-3 p-2.5">
        {/* icon */}
        <div className={`w-15 h-15 rounded-full flex items-center justify-center shrink-0 ${c.iconColor}`}>
          {c.icon}
        </div>

        {/* text */}
        <div className="flex-1 min-w-0 pt-2.5">
          <p className={`text-sm md:text-[15.5px] font-bold leading-5 ${c.title}`}>{toast.title}</p>
          {toast.message && (
            <p className="text-xs md:text-[13px] text-neutral-500 mt-0.5 leading-5">{toast.message}</p>
          )}
        </div>

        {/* close */}
        <button
          onClick={handleClose}
          className="text-neutral-300 hover:text-neutral-500 transition-colors duration-150 mt-5.5 ml-3 shrink-0"
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>

      {/* progress bar — fills from right to left */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white">
        <div
          className={`h-full ${c.bar} transition-none`}
          style={{
            width: `${progress}%`,
            marginLeft: "auto",
            transition: "width 30ms linear",
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
Provider + Container
───────────────────────────────────────── */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}

      {/* container — bottom-left on desktop, bottom-center on mobile */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-[9999] flex flex-col gap-2.5 items-center sm:items-start"
        dir="rtl"
      >
        {toasts.map((t) => (
          <ToastCard key={t.id} toast={t} onRemove={remove} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}