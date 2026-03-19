export type AccountStatus = "active" | "churned" | "trial" | "paused";

export type SubscriptionTier = "starter" | "professional" | "enterprise";

export interface Account {
  id: string;
  name: string;
  email: string;
  status: AccountStatus;
  tier: SubscriptionTier;
  mrr: number;
  owner: string;
  lastActivity: string;
  createdAt: string;
  avatar?: string;
  industry: string;
  employees: number;
}
