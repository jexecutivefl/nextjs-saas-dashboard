"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationGroups } from "@/data/navigation";
import { NavIcon, CloseIcon } from "./icons";
import { siteConfig } from "@/config/site";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-surface-border bg-surface transition-transform duration-200 md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-surface-border px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-bold text-sm">
              S
            </div>
            <span className="text-base font-semibold text-content">
              {siteConfig.name}
            </span>
          </Link>
          <button
            onClick={onClose}
            className="rounded p-1 text-content-tertiary hover:text-content md:hidden"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin">
          {navigationGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-content-tertiary">
                {group.label}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-brand-50 text-brand-700"
                            : "text-content-secondary hover:bg-surface-hover hover:text-content"
                        )}
                      >
                        <NavIcon
                          name={item.icon}
                          className={cn(
                            "h-5 w-5 flex-shrink-0",
                            isActive
                              ? "text-brand-600"
                              : "text-content-tertiary"
                          )}
                        />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-100 px-1.5 text-2xs font-medium text-brand-700">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-surface-border px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-medium text-brand-700">
              AC
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-content">
                {siteConfig.company}
              </p>
              <p className="truncate text-xs text-content-tertiary">
                Enterprise Plan
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
