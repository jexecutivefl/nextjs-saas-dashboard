export const kpiData = {
  totalRevenue: { value: 106880, change: 8.3, label: "Monthly Revenue" },
  activeAccounts: { value: 14, change: 16.7, label: "Active Accounts" },
  taskCompletion: { value: 73, change: 5.2, label: "Task Completion %" },
  customerSatisfaction: { value: 94, change: 1.8, label: "CSAT Score" },
  newTrials: { value: 2, change: -33.3, label: "New Trials" },
  churnRate: { value: 2.1, change: -0.4, label: "Churn Rate %" },
};

export const revenueChartData = [
  { month: "Oct", revenue: 82400, target: 80000 },
  { month: "Nov", revenue: 88500, target: 85000 },
  { month: "Dec", revenue: 91200, target: 90000 },
  { month: "Jan", revenue: 94800, target: 95000 },
  { month: "Feb", revenue: 98700, target: 100000 },
  { month: "Mar", revenue: 106880, target: 105000 },
];

export const growthChartData = [
  { month: "Oct", newAccounts: 3, churned: 1 },
  { month: "Nov", newAccounts: 4, churned: 1 },
  { month: "Dec", newAccounts: 2, churned: 0 },
  { month: "Jan", newAccounts: 3, churned: 1 },
  { month: "Feb", newAccounts: 4, churned: 2 },
  { month: "Mar", newAccounts: 5, churned: 1 },
];
