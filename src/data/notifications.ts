export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "payment" | "task" | "alert" | "account" | "system";
}

export const notifications: Notification[] = [
  {
    id: "n-001",
    title: "Payment Received",
    message: "$18,500 from Crestline Energy",
    time: "10 min ago",
    read: false,
    type: "payment",
  },
  {
    id: "n-002",
    title: "Task Completed",
    message: "Sarah Chen completed payment retry logic fix",
    time: "45 min ago",
    read: false,
    type: "task",
  },
  {
    id: "n-003",
    title: "New Trial Account",
    message: "Skyline Properties signed up for a trial",
    time: "1 hr ago",
    read: false,
    type: "account",
  },
  {
    id: "n-004",
    title: "Invoice Overdue",
    message: "Invoice #inv-010 for Vertex Solutions is 5 days overdue",
    time: "2 hr ago",
    read: true,
    type: "alert",
  },
  {
    id: "n-005",
    title: "Subscription Upgrade",
    message: "Meridian Technologies upgraded to Enterprise",
    time: "3 hr ago",
    read: true,
    type: "account",
  },
  {
    id: "n-006",
    title: "System Update",
    message: "Monthly invoices sent to 14 accounts",
    time: "5 hr ago",
    read: true,
    type: "system",
  },
];
