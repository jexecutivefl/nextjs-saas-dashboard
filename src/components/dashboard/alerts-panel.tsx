import { AlertIcon } from "@/components/layout/icons";
import { formatRelativeDate } from "@/lib/utils";
import type { ActivityItem } from "@/types";

interface AlertsPanelProps {
  alerts: ActivityItem[];
}

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  if (alerts.length === 0) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <p className="text-sm text-content-secondary">No active alerts</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="flex items-start gap-3 rounded-md border border-warning/30 bg-warning-light p-3"
        >
          <AlertIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-warning-dark" />
          <div className="min-w-0 flex-1">
            <p className="text-sm text-warning-dark">{alert.message}</p>
            <p className="mt-0.5 text-xs text-warning-dark/70">
              {formatRelativeDate(alert.timestamp)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
