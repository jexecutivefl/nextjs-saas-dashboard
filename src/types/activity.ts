export type ActivityType =
  | "account_created"
  | "payment_received"
  | "task_completed"
  | "user_login"
  | "subscription_changed"
  | "alert"
  | "invoice_sent";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  message: string;
  timestamp: string;
  user?: string;
  metadata?: Record<string, string>;
}
