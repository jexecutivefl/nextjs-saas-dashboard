"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RevenueAreaChartProps {
  data: { month: string; revenue: number; target: number }[];
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="rounded-lg border border-surface-border bg-surface p-3 shadow-dropdown">
      <p className="text-xs font-medium text-content-secondary mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="text-sm">
          <span className="text-content-secondary capitalize">{entry.dataKey}: </span>
          <span className="font-medium text-content">
            ${(entry.value / 1000).toFixed(1)}K
          </span>
        </p>
      ))}
    </div>
  );
}

export function RevenueAreaChart({ data }: RevenueAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#94a3b8" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#94a3b8" }}
          tickFormatter={(v) => `$${v / 1000}K`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#revenueGradient)"
        />
        <Area
          type="monotone"
          dataKey="target"
          stroke="#94a3b8"
          strokeWidth={1.5}
          strokeDasharray="5 5"
          fill="none"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
