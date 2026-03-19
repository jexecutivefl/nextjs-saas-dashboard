import { Card, CardContent } from "@/components/ui/card";
import { TrendUpIcon, TrendDownIcon } from "@/components/layout/icons";
import { cn } from "@/lib/utils";

interface KPICardProps {
  label: string;
  value: string;
  change: number;
  format?: "currency" | "percent" | "number";
  invertTrend?: boolean;
}

export function KPICard({ label, value, change, invertTrend = false }: KPICardProps) {
  const isPositive = invertTrend ? change <= 0 : change >= 0;

  return (
    <Card hover>
      <CardContent className="py-5">
        <p className="text-sm font-medium text-content-secondary">{label}</p>
        <div className="mt-2 flex items-end justify-between">
          <p className="text-2xl font-semibold tracking-tight text-content">
            {value}
          </p>
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium",
              isPositive ? "text-success-dark" : "text-error-dark"
            )}
          >
            {change >= 0 ? (
              <TrendUpIcon className="h-3.5 w-3.5" />
            ) : (
              <TrendDownIcon className="h-3.5 w-3.5" />
            )}
            <span>
              {change >= 0 ? "+" : ""}
              {change.toFixed(1)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
