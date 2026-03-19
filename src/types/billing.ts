export type BillingStatus = "paid" | "pending" | "overdue" | "failed";

export type PlanType = "starter" | "professional" | "enterprise";

export interface Invoice {
  id: string;
  accountName: string;
  accountId: string;
  amount: number;
  status: BillingStatus;
  date: string;
  dueDate: string;
  plan: PlanType;
}

export interface RevenueMetric {
  label: string;
  value: number;
  change: number;
  period: string;
}

export interface PlanDistribution {
  plan: PlanType;
  count: number;
  revenue: number;
  percentage: number;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
  newBusiness: number;
  expansion: number;
  churn: number;
}
