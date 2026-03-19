import { formatRelativeDate } from "@/lib/utils";
import type { ActivityItem } from "@/types";
import { cn } from "@/lib/utils";

interface ActivityFeedProps {
  items: ActivityItem[];
  limit?: number;
}

const typeStyles: Record<string, { dot: string; icon: string }> = {
  payment_received: { dot: "bg-success", icon: "$" },
  task_completed: { dot: "bg-brand-500", icon: "✓" },
  account_created: { dot: "bg-info", icon: "+" },
  subscription_changed: { dot: "bg-purple-500", icon: "↑" },
  user_login: { dot: "bg-slate-400", icon: "→" },
  alert: { dot: "bg-warning", icon: "!" },
  invoice_sent: { dot: "bg-slate-500", icon: "✉" },
};

export function ActivityFeed({ items, limit = 10 }: ActivityFeedProps) {
  const displayItems = items.slice(0, limit);

  return (
    <div className="space-y-0">
      {displayItems.map((item, index) => {
        const style = typeStyles[item.type] || { dot: "bg-slate-400", icon: "•" };

        return (
          <div
            key={item.id}
            className={cn(
              "flex gap-3 py-3",
              index < displayItems.length - 1 && "border-b border-surface-border"
            )}
          >
            <div
              className={cn(
                "mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-white text-xs font-medium",
                style.dot
              )}
            >
              {style.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-content leading-snug">
                {item.message}
              </p>
              <p className="mt-0.5 text-xs text-content-tertiary">
                {item.user && <span>{item.user} · </span>}
                {formatRelativeDate(item.timestamp)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
