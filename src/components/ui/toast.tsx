"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/layout/icons";

export type ToastVariant = "success" | "error" | "info";

interface ToastProps {
  id: string;
  message: string;
  variant?: ToastVariant;
  onDismiss: (id: string) => void;
}

const variantStyles: Record<ToastVariant, string> = {
  success: "border-success bg-success-light text-success-dark",
  error: "border-error bg-error-light text-error-dark",
  info: "border-brand-500 bg-brand-50 text-brand-800",
};

const icons: Record<ToastVariant, string> = {
  success: "\u2713",
  error: "\u2717",
  info: "\u2139",
};

export function Toast({ id, message, variant = "success", onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(id), 4000);
    return () => clearTimeout(timer);
  }, [id, onDismiss]);

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border px-4 py-3 shadow-dropdown animate-in slide-in-from-right",
        variantStyles[variant]
      )}
    >
      <span className="text-base font-bold leading-none">{icons[variant]}</span>
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={() => onDismiss(id)}
        className="rounded p-0.5 opacity-70 hover:opacity-100"
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
