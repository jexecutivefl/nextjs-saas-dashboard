"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface PlanPieChartProps {
  data: { name: string; value: number; color: string }[];
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; payload: { name: string; value: number } }> }) {
  if (!active || !payload?.[0]) return null;
  const item = payload[0];
  return (
    <div className="rounded-lg border border-surface-border bg-surface p-2.5 shadow-dropdown">
      <p className="text-sm font-medium text-content">{item.payload.name}</p>
      <p className="text-xs text-content-secondary">
        ${(item.value / 1000).toFixed(1)}K/mo
      </p>
    </div>
  );
}

export function PlanPieChart({ data }: PlanPieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={95}
          paddingAngle={3}
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
}
