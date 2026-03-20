"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { notifications as initialNotifications } from "@/data/notifications";

const typeIcons: Record<string, string> = {
  payment: "$",
  task: "\u2713",
  alert: "!",
  account: "\u25CB",
  system: "\u2699",
};

const typeColors: Record<string, string> = {
  payment: "bg-success-light text-success-dark",
  task: "bg-brand-50 text-brand-700",
  alert: "bg-warning-light text-warning-dark",
  account: "bg-info-light text-info-dark",
  system: "bg-surface-tertiary text-content-secondary",
};

export function NotificationPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [items, setItems] = useState(initialNotifications);
  const unreadCount = items.filter((n) => !n.read).length;

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-full mt-2 z-50 w-80 rounded-lg border border-surface-border bg-surface shadow-dropdown animate-in fade-in slide-in-from-top-2">
        <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-content">Notifications</h3>
            {unreadCount > 0 && (
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-600 px-1.5 text-2xs font-medium text-white">
                {unreadCount}
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-xs text-brand-600 hover:text-brand-700 font-medium"
            >
              Mark all read
            </button>
          )}
        </div>

        <div className="max-h-80 overflow-y-auto scrollbar-thin">
          {items.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "flex gap-3 border-b border-surface-border px-4 py-3 last:border-b-0 transition-colors",
                !notification.read && "bg-brand-50/30"
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  typeColors[notification.type]
                )}
              >
                {typeIcons[notification.type]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-content truncate">
                    {notification.title}
                  </p>
                  {!notification.read && (
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brand-600" />
                  )}
                </div>
                <p className="text-xs text-content-secondary truncate">
                  {notification.message}
                </p>
                <p className="mt-0.5 text-2xs text-content-tertiary">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-surface-border px-4 py-2">
          <button className="w-full text-center text-xs font-medium text-brand-600 hover:text-brand-700 py-1">
            View all notifications
          </button>
        </div>
      </div>
    </>
  );
}
