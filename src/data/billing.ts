import type { Invoice, RevenueMetric, PlanDistribution, MonthlyRevenue } from "@/types";

export const revenueMetrics: RevenueMetric[] = [
  { label: "Monthly Recurring Revenue", value: 106880, change: 8.3, period: "vs last month" },
  { label: "Annual Run Rate", value: 1282560, change: 8.3, period: "projected" },
  { label: "Average Revenue Per Account", value: 5930, change: 3.2, period: "vs last month" },
  { label: "Net Revenue Retention", value: 112, change: 2.1, period: "vs last quarter" },
];

export const planDistribution: PlanDistribution[] = [
  { plan: "starter", count: 3, revenue: 1780, percentage: 1.7 },
  { plan: "professional", count: 8, revenue: 35200, percentage: 32.9 },
  { plan: "enterprise", count: 7, revenue: 75900, percentage: 65.4 },
];

export const invoices: Invoice[] = [
  { id: "inv-001", accountName: "Crestline Energy", accountId: "acc-015", amount: 18500, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "enterprise" },
  { id: "inv-002", accountName: "NovaBridge Software", accountId: "acc-007", amount: 15000, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "enterprise" },
  { id: "inv-003", accountName: "Meridian Technologies", accountId: "acc-001", amount: 12500, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "enterprise" },
  { id: "inv-004", accountName: "Evergreen Manufacturing", accountId: "acc-011", amount: 11200, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "enterprise" },
  { id: "inv-005", accountName: "Pinnacle Health Group", accountId: "acc-002", amount: 9800, status: "pending", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-20T00:00:00Z", plan: "enterprise" },
  { id: "inv-006", accountName: "Sterling Legal Partners", accountId: "acc-019", amount: 8900, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "enterprise" },
  { id: "inv-007", accountName: "Quantum Finance", accountId: "acc-012", amount: 6700, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "professional" },
  { id: "inv-008", accountName: "Apex Biotech", accountId: "acc-017", amount: 5500, status: "pending", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-20T00:00:00Z", plan: "professional" },
  { id: "inv-009", accountName: "Clearpath Logistics", accountId: "acc-008", amount: 5100, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "professional" },
  { id: "inv-010", accountName: "Vertex Solutions", accountId: "acc-003", amount: 4500, status: "overdue", date: "2026-02-01T00:00:00Z", dueDate: "2026-02-15T00:00:00Z", plan: "professional" },
  { id: "inv-011", accountName: "Forge Security", accountId: "acc-014", amount: 4200, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "professional" },
  { id: "inv-012", accountName: "Redwood Analytics", accountId: "acc-005", amount: 3200, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "professional" },
  { id: "inv-013", accountName: "Atlas Education", accountId: "acc-009", amount: 990, status: "paid", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "starter" },
  { id: "inv-014", accountName: "Lumen Creative", accountId: "acc-016", amount: 790, status: "failed", date: "2026-03-01T00:00:00Z", dueDate: "2026-03-15T00:00:00Z", plan: "starter" },
  { id: "inv-015", accountName: "Harbor Foods Inc", accountId: "acc-020", amount: 3200, status: "overdue", date: "2026-01-01T00:00:00Z", dueDate: "2026-01-15T00:00:00Z", plan: "professional" },
];

export const monthlyRevenue: MonthlyRevenue[] = [
  { month: "Oct 2025", revenue: 82400, newBusiness: 8200, expansion: 3100, churn: -2800 },
  { month: "Nov 2025", revenue: 88500, newBusiness: 9500, expansion: 2400, churn: -3200 },
  { month: "Dec 2025", revenue: 91200, newBusiness: 6100, expansion: 4800, churn: -1900 },
  { month: "Jan 2026", revenue: 94800, newBusiness: 7200, expansion: 3600, churn: -2500 },
  { month: "Feb 2026", revenue: 98700, newBusiness: 8900, expansion: 2800, churn: -3100 },
  { month: "Mar 2026", revenue: 106880, newBusiness: 11200, expansion: 4500, churn: -2700 },
];
