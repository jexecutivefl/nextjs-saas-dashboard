"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { accounts } from "@/data/accounts";
import { tasks } from "@/data/tasks";
import { SearchIcon } from "./icons";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  href: string;
}

const pages: SearchResult[] = [
  { id: "p-1", title: "Dashboard", subtitle: "Overview & KPIs", category: "Pages", href: "/" },
  { id: "p-2", title: "Accounts", subtitle: "Customer management", category: "Pages", href: "/accounts" },
  { id: "p-3", title: "Workflows", subtitle: "Tasks & priorities", category: "Pages", href: "/workflows" },
  { id: "p-4", title: "Billing", subtitle: "Revenue & invoices", category: "Pages", href: "/billing" },
  { id: "p-5", title: "Settings", subtitle: "Configuration", category: "Pages", href: "/settings" },
];

const allResults: SearchResult[] = [
  ...pages,
  ...accounts.slice(0, 10).map((a) => ({
    id: a.id,
    title: a.name,
    subtitle: `${a.email} \u2022 ${a.tier} \u2022 ${a.status}`,
    category: "Accounts",
    href: "/accounts",
  })),
  ...tasks.slice(0, 8).map((t) => ({
    id: t.id,
    title: t.title,
    subtitle: `${t.assignee} \u2022 ${t.status.replace("_", " ")}`,
    category: "Tasks",
    href: "/workflows",
  })),
];

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = useMemo(() => {
    if (!query.trim()) return pages;
    const q = query.toLowerCase();
    return allResults.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      router.push(result.href);
      onClose();
      setQuery("");
    },
    [router, onClose]
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        setQuery("");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, filtered, selectedIndex, handleSelect]);

  if (!open) return null;

  // Group results by category
  const grouped = filtered.reduce<Record<string, SearchResult[]>>((acc, r) => {
    if (!acc[r.category]) acc[r.category] = [];
    acc[r.category].push(r);
    return acc;
  }, {});

  let flatIndex = -1;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div
        className="absolute inset-0 bg-black/50 animate-in fade-in"
        onClick={() => {
          onClose();
          setQuery("");
        }}
      />

      <div className="relative w-full max-w-lg rounded-xl border border-surface-border bg-surface shadow-dropdown animate-in zoom-in-95 fade-in">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-surface-border px-4">
          <SearchIcon className="h-5 w-5 text-content-tertiary flex-shrink-0" />
          <input
            type="text"
            placeholder="Search accounts, tasks, pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 flex-1 bg-transparent text-sm text-content placeholder:text-content-tertiary focus:outline-none"
            autoFocus
          />
          <kbd className="rounded border border-surface-border bg-surface-secondary px-1.5 py-0.5 text-2xs text-content-tertiary">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-72 overflow-y-auto p-2 scrollbar-thin">
          {filtered.length === 0 ? (
            <div className="flex items-center justify-center py-8">
              <p className="text-sm text-content-secondary">
                No results for &ldquo;{query}&rdquo;
              </p>
            </div>
          ) : (
            Object.entries(grouped).map(([category, results]) => (
              <div key={category} className="mb-2 last:mb-0">
                <p className="mb-1 px-3 text-2xs font-medium uppercase tracking-wider text-content-tertiary">
                  {category}
                </p>
                {results.map((result) => {
                  flatIndex++;
                  const idx = flatIndex;
                  return (
                    <button
                      key={result.id}
                      onClick={() => handleSelect(result)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
                        idx === selectedIndex
                          ? "bg-brand-50 text-brand-700"
                          : "text-content hover:bg-surface-hover"
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {result.title}
                        </p>
                        <p className="truncate text-xs text-content-tertiary">
                          {result.subtitle}
                        </p>
                      </div>
                      {idx === selectedIndex && (
                        <span className="text-2xs text-content-tertiary">
                          Enter
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 border-t border-surface-border px-4 py-2 text-2xs text-content-tertiary">
          <span>
            <kbd className="rounded border border-surface-border px-1 py-0.5 mr-1">
              &uarr;
            </kbd>
            <kbd className="rounded border border-surface-border px-1 py-0.5 mr-1">
              &darr;
            </kbd>
            Navigate
          </span>
          <span>
            <kbd className="rounded border border-surface-border px-1 py-0.5 mr-1">
              Enter
            </kbd>
            Select
          </span>
        </div>
      </div>
    </div>
  );
}
