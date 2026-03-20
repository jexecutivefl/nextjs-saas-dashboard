export interface AIInsight {
  id: string;
  category: "revenue" | "risk" | "performance" | "growth";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
}

export const insightSets: AIInsight[][] = [
  [
    {
      id: "ai-001",
      category: "revenue",
      title: "Revenue exceeding targets",
      description:
        "Monthly revenue is trending 12% above target at $106.9K. Enterprise accounts are driving 68% of growth \u2014 consider expanding enterprise sales outreach.",
      impact: "high",
    },
    {
      id: "ai-002",
      category: "risk",
      title: "3 accounts showing churn signals",
      description:
        "Coastal Ventures, Summit Retail Co, and Aurora Digital have not logged in for 14+ days. Recommend proactive outreach by Customer Success.",
      impact: "high",
    },
    {
      id: "ai-003",
      category: "performance",
      title: "Task velocity accelerating",
      description:
        "Team task completion rate improved 5.2% this month. Sarah Chen leads with 12 tasks completed \u2014 highest in the organization.",
      impact: "medium",
    },
    {
      id: "ai-004",
      category: "growth",
      title: "Trial conversion opportunity",
      description:
        "2 trial accounts are highly engaged (Skyline Properties, Coastal Ventures). Recommend scheduling demo calls within the next 48 hours.",
      impact: "medium",
    },
  ],
  [
    {
      id: "ai-005",
      category: "revenue",
      title: "ARPA growth detected",
      description:
        "Average revenue per account increased 9% quarter-over-quarter. Professional tier accounts show strongest upsell potential for enterprise.",
      impact: "high",
    },
    {
      id: "ai-006",
      category: "risk",
      title: "Payment failures increasing",
      description:
        "2 failed payments detected this week (Lumen Creative, Aurora Digital). Automated retry is scheduled \u2014 manual follow-up recommended if retry fails.",
      impact: "high",
    },
    {
      id: "ai-007",
      category: "performance",
      title: "Infrastructure tasks backlogged",
      description:
        "5 infrastructure tasks are overdue by an average of 3 days. Consider redistributing workload or adjusting sprint priorities.",
      impact: "medium",
    },
    {
      id: "ai-008",
      category: "growth",
      title: "Net revenue retention strong",
      description:
        "NRR at 112% indicates healthy expansion revenue. Top expansion accounts: Meridian Technologies (+$2.5K), Clearpath Logistics (+$1.2K).",
      impact: "low",
    },
  ],
];

export const categoryConfig: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  revenue: { label: "Revenue", color: "text-success-dark", bg: "bg-success-light" },
  risk: { label: "Risk", color: "text-error-dark", bg: "bg-error-light" },
  performance: { label: "Performance", color: "text-brand-800", bg: "bg-brand-50" },
  growth: { label: "Growth", color: "text-info-dark", bg: "bg-info-light" },
};
