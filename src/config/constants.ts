import type { AccountStatus, TaskStatus, TaskPriority, BillingStatus, PlanType } from "@/types";

export const STATUS_COLORS: Record<AccountStatus, { bg: string; text: string; dot: string }> = {
  active: { bg: "bg-success-light", text: "text-success-dark", dot: "bg-success" },
  trial: { bg: "bg-info-light", text: "text-info-dark", dot: "bg-info" },
  paused: { bg: "bg-warning-light", text: "text-warning-dark", dot: "bg-warning" },
  churned: { bg: "bg-error-light", text: "text-error-dark", dot: "bg-error" },
};

export const TASK_STATUS_COLORS: Record<TaskStatus, { bg: string; text: string; label: string }> = {
  todo: { bg: "bg-slate-100", text: "text-slate-700", label: "To Do" },
  in_progress: { bg: "bg-info-light", text: "text-info-dark", label: "In Progress" },
  review: { bg: "bg-warning-light", text: "text-warning-dark", label: "Review" },
  done: { bg: "bg-success-light", text: "text-success-dark", label: "Done" },
};

export const PRIORITY_COLORS: Record<TaskPriority, { bg: string; text: string; label: string }> = {
  low: { bg: "bg-slate-100", text: "text-slate-600", label: "Low" },
  medium: { bg: "bg-info-light", text: "text-info-dark", label: "Medium" },
  high: { bg: "bg-warning-light", text: "text-warning-dark", label: "High" },
  urgent: { bg: "bg-error-light", text: "text-error-dark", label: "Urgent" },
};

export const BILLING_STATUS_COLORS: Record<BillingStatus, { bg: string; text: string }> = {
  paid: { bg: "bg-success-light", text: "text-success-dark" },
  pending: { bg: "bg-warning-light", text: "text-warning-dark" },
  overdue: { bg: "bg-error-light", text: "text-error-dark" },
  failed: { bg: "bg-red-100", text: "text-red-800" },
};

export const TIER_LABELS: Record<PlanType, string> = {
  starter: "Starter",
  professional: "Professional",
  enterprise: "Enterprise",
};

export const TIER_COLORS: Record<PlanType, { bg: string; text: string }> = {
  starter: { bg: "bg-slate-100", text: "text-slate-700" },
  professional: { bg: "bg-brand-50", text: "text-brand-700" },
  enterprise: { bg: "bg-purple-50", text: "text-purple-700" },
};
