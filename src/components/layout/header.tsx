"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { NotificationPanel } from "@/components/ui/notification-panel";
import { BellIcon, MenuIcon, SearchIcon } from "./icons";

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick?: () => void;
}

export function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-surface-border bg-surface px-4 md:px-6">
      <button
        onClick={onMenuClick}
        className="rounded p-1.5 text-content-secondary hover:bg-surface-hover hover:text-content md:hidden"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-content-tertiary" />
        <input
          type="text"
          placeholder="Search anything..."
          readOnly
          onClick={onSearchClick}
          className="h-9 w-full cursor-pointer rounded-md border border-surface-border bg-surface-secondary pl-9 pr-16 text-sm text-content placeholder:text-content-tertiary focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-surface-border bg-surface px-1.5 py-0.5 text-2xs font-medium text-content-tertiary">
          Ctrl K
        </kbd>
      </div>

      <div className="flex items-center gap-2">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative rounded-md p-2 text-content-secondary hover:bg-surface-hover hover:text-content"
          >
            <BellIcon className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
          </button>
          <NotificationPanel
            open={notificationsOpen}
            onClose={() => setNotificationsOpen(false)}
          />
        </div>

        {/* User */}
        <div className="flex items-center gap-2 pl-2 border-l border-surface-border">
          <Avatar name="Alex Morgan" size="sm" />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-content leading-none">
              Alex Morgan
            </p>
            <p className="text-xs text-content-tertiary leading-none mt-0.5">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
