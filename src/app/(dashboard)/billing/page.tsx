"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/tables/data-table";
import { PlanPieChart } from "@/components/charts/pie-chart";
import { TrendUpIcon, TrendDownIcon } from "@/components/layout/icons";
import { revenueMetrics, planDistribution, invoices, monthlyRevenue } from "@/data/billing";
import { formatCurrency, formatCurrencyCompact, formatDate, cn } from "@/lib/utils";
import { BILLING_STATUS_COLORS, TIER_LABELS } from "@/config/constants";
import type { Invoice } from "@/types";

const PLAN_COLORS: Record<string, string> = {
  starter: "#94a3b8",
  professional: "#3b82f6",
  enterprise: "#8b5cf6",
};

export default function BillingPage() {
  const pieData = planDistribution.map((p) => ({
    name: TIER_LABELS[p.plan],
    value: p.revenue,
    color: PLAN_COLORS[p.plan],
  }));

  const invoiceColumns = [
    {
      key: "account",
      label: "Account",
      render: (inv: Invoice) => (
        <span className="text-sm font-medium text-content">{inv.accountName}</span>
      ),
    },
    {
      key: "amount",
      label: "Amount",
      render: (inv: Invoice) => (
        <span className="text-sm font-medium text-content">
          {formatCurrency(inv.amount)}
        </span>
      ),
    },
    {
      key: "plan",
      label: "Plan",
      className: "hidden md:table-cell",
      render: (inv: Invoice) => (
        <span className="text-sm text-content-secondary">
          {TIER_LABELS[inv.plan]}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (inv: Invoice) => {
        const colors = BILLING_STATUS_COLORS[inv.status];
        return (
          <Badge className={`${colors.bg} ${colors.text}`}>
            {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
          </Badge>
        );
      },
    },
    {
      key: "date",
      label: "Date",
      className: "hidden lg:table-cell",
      render: (inv: Invoice) => (
        <span className="text-sm text-content-secondary">
          {formatDate(inv.date)}
        </span>
      ),
    },
    {
      key: "due",
      label: "Due Date",
      className: "hidden lg:table-cell",
      render: (inv: Invoice) => (
        <span className="text-sm text-content-secondary">
          {formatDate(inv.dueDate)}
        </span>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Billing & Revenue"
        description="Monitor revenue, invoices, and subscription metrics"
        actions={<Button size="sm">Export Report</Button>}
      />

      {/* Revenue Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {revenueMetrics.map((metric) => (
          <Card key={metric.label} hover>
            <CardContent className="py-5">
              <p className="text-sm text-content-secondary">{metric.label}</p>
              <div className="mt-2 flex items-end justify-between">
                <p className="text-2xl font-semibold tracking-tight text-content">
                  {metric.label.includes("Retention")
                    ? `${metric.value}%`
                    : formatCurrencyCompact(metric.value)}
                </p>
                <div
                  className={cn(
                    "flex items-center gap-1 text-xs font-medium",
                    metric.change >= 0 ? "text-success-dark" : "text-error-dark"
                  )}
                >
                  {metric.change >= 0 ? (
                    <TrendUpIcon className="h-3.5 w-3.5" />
                  ) : (
                    <TrendDownIcon className="h-3.5 w-3.5" />
                  )}
                  <span>
                    {metric.change >= 0 ? "+" : ""}
                    {metric.change.toFixed(1)}%
                  </span>
                </div>
              </div>
              <p className="mt-1 text-xs text-content-tertiary">{metric.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-3 mb-6">
        {/* Plan Distribution */}
        <Card>
          <CardHeader>
            <h3 className="font-medium text-content">Revenue by Plan</h3>
          </CardHeader>
          <CardContent>
            <PlanPieChart data={pieData} />
            <div className="mt-4 space-y-2">
              {planDistribution.map((p) => (
                <div key={p.plan} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: PLAN_COLORS[p.plan] }}
                    />
                    <span className="text-sm text-content-secondary">
                      {TIER_LABELS[p.plan]}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-content">
                      {formatCurrency(p.revenue)}
                    </span>
                    <span className="ml-2 text-xs text-content-tertiary">
                      ({p.percentage}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Accounts by Revenue */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="font-medium text-content">Top Accounts by Revenue</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {invoices
                .filter((inv) => inv.status === "paid")
                .sort((a, b) => b.amount - a.amount)
                .slice(0, 6)
                .map((inv, i) => (
                  <div key={inv.id} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-tertiary text-xs font-medium text-content-secondary">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-content truncate">
                          {inv.accountName}
                        </span>
                        <span className="text-sm font-semibold text-content ml-3">
                          {formatCurrency(inv.amount)}/mo
                        </span>
                      </div>
                      <div className="mt-1 h-1.5 rounded-full bg-surface-tertiary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-brand-500"
                          style={{
                            width: `${(inv.amount / invoices[0].amount) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-content">Recent Invoices</h3>
            <span className="text-xs text-content-tertiary">
              {invoices.length} invoices
            </span>
          </div>
        </CardHeader>
        <DataTable
          columns={invoiceColumns}
          data={invoices}
          keyField="id"
          emptyMessage="No invoices found"
        />
      </Card>
    </div>
  );
}
