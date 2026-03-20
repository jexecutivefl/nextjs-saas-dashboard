"use client";

import { useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/layout/icons";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = "md",
}: ModalProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, handleEsc]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 animate-in fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "relative w-full rounded-lg border border-surface-border bg-surface shadow-dropdown animate-in zoom-in-95 fade-in",
          sizeStyles[size]
        )}
      >
        {/* Header */}
        {(title || description) && (
          <div className="flex items-start justify-between border-b border-surface-border px-6 py-4">
            <div>
              {title && (
                <h2 className="text-lg font-semibold text-content">{title}</h2>
              )}
              {description && (
                <p className="mt-1 text-sm text-content-secondary">
                  {description}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="rounded p-1 text-content-tertiary hover:bg-surface-hover hover:text-content"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
}
