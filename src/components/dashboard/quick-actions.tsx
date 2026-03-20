"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/providers/toast-provider";

const actions = [
  { label: "Add Account", icon: "+", href: "/accounts" },
  { label: "Create Task", icon: "\u270E", href: "/workflows" },
  { label: "Send Invoice", icon: "\u2709", toast: "Invoice draft created" },
  { label: "View Reports", icon: "\u25A9", href: "/billing" },
];

export function QuickActions() {
  const router = useRouter();
  const { addToast } = useToast();

  const handleAction = (action: (typeof actions)[number]) => {
    if (action.toast) {
      addToast(action.toast, "info");
    } else if (action.href) {
      router.push(action.href);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          className="justify-start gap-2 text-xs"
          onClick={() => handleAction(action)}
        >
          <span className="text-base leading-none">{action.icon}</span>
          {action.label}
        </Button>
      ))}
    </div>
  );
}
