"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface GrowthBarChartProps {
  data: { month: string; newAccounts: number; churned: number }[];
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string; color: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="rounded-lg border border-surface-border bg-surface p-3 shadow-dropdown">
      <p className="text-xs font-medium text-content-secondary mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="text-sm">
          <span className="inline-block h-2 w-2 rounded-full mr-1.5" style={{ backgroundColor: entry.color }} />
          <span className="text-content-secondary capitalize">
            {entry.dataKey === "newAccounts" ? "New" : "Churned"}:{" "}
          </span>
          <span className="font-medium text-content">{entry.value}</span>
        </p>
      ))}
    </div>
  );
}

export function GrowthBarChart({ data }: GrowthBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
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
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: "12px", color: "#64748b" }}
        />
        <Bar dataKey="newAccounts" name="New Accounts" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="churned" name="Churned" fill="#f87171" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
