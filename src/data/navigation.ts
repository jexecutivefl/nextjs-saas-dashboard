import type { NavGroup } from "@/types";

export const navigationGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", href: "/", icon: "dashboard" },
    ],
  },
  {
    label: "Management",
    items: [
      { label: "Accounts", href: "/accounts", icon: "accounts" },
      { label: "Workflows", href: "/workflows", icon: "workflows", badge: "4" },
      { label: "Billing", href: "/billing", icon: "billing" },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Settings", href: "/settings", icon: "settings" },
    ],
  },
];
