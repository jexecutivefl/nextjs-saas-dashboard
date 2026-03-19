"use client";

import type { Account } from "@/types";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CloseIcon } from "@/components/layout/icons";
import { formatCurrency, formatDate } from "@/lib/utils";
import { STATUS_COLORS, TIER_LABELS, TIER_COLORS } from "@/config/constants";

interface AccountDetailProps {
  account: Account;
  onClose: () => void;
}

export function AccountDetail({ account, onClose }: AccountDetailProps) {
  const statusColor = STATUS_COLORS[account.status];
  const tierColor = TIER_COLORS[account.tier];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-surface-border bg-surface shadow-dropdown overflow-y-auto">
      <div className="flex items-center justify-between border-b border-surface-border px-6 py-4">
        <h2 className="text-lg font-semibold text-content">Account Details</h2>
        <button
          onClick={onClose}
          className="rounded p-1 text-content-tertiary hover:text-content"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Avatar name={account.name} size="lg" />
          <div>
            <h3 className="text-lg font-semibold text-content">{account.name}</h3>
            <p className="text-sm text-content-secondary">{account.email}</p>
          </div>
        </div>

        {/* Status Row */}
        <div className="flex items-center gap-3">
          <Badge className={`${statusColor.bg} ${statusColor.text}`}>
            {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
          </Badge>
          <Badge className={`${tierColor.bg} ${tierColor.text}`}>
            {TIER_LABELS[account.tier]}
          </Badge>
        </div>

        {/* Details */}
        <Card>
          <CardContent className="space-y-4 py-4">
            <DetailRow label="Monthly Revenue" value={formatCurrency(account.mrr)} />
            <DetailRow label="Account Owner" value={account.owner} />
            <DetailRow label="Industry" value={account.industry} />
            <DetailRow label="Employees" value={account.employees.toLocaleString()} />
            <DetailRow label="Created" value={formatDate(account.createdAt)} />
            <DetailRow label="Last Activity" value={formatDate(account.lastActivity)} />
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="primary" size="sm" className="flex-1">
            Edit Account
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            View History
          </Button>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-content-secondary">{label}</span>
      <span className="text-sm font-medium text-content">{value}</span>
    </div>
  );
}
