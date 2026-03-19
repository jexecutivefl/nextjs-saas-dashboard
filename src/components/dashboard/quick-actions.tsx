import { Button } from "@/components/ui/button";

const actions = [
  { label: "Add Account", icon: "+" },
  { label: "Create Task", icon: "✎" },
  { label: "Send Invoice", icon: "✉" },
  { label: "View Reports", icon: "◩" },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          className="justify-start gap-2 text-xs"
        >
          <span className="text-base leading-none">{action.icon}</span>
          {action.label}
        </Button>
      ))}
    </div>
  );
}
