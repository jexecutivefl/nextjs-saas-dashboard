"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/tables/data-table";
import { SearchInput } from "@/components/tables/search-input";
import { AccountDetail } from "@/components/dashboard/account-detail";
import { accounts } from "@/data/accounts";
import { formatCurrency, formatRelativeDate } from "@/lib/utils";
import { STATUS_COLORS, TIER_LABELS, TIER_COLORS } from "@/config/constants";
import { useDebounce } from "@/hooks/use-debounce";
import type { Account, AccountStatus, SubscriptionTier } from "@/types";

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "trial", label: "Trial" },
  { value: "paused", label: "Paused" },
  { value: "churned", label: "Churned" },
];

const tierOptions = [
  { value: "all", label: "All Tiers" },
  { value: "starter", label: "Starter" },
  { value: "professional", label: "Professional" },
  { value: "enterprise", label: "Enterprise" },
];

export default function AccountsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [tierFilter, setTierFilter] = useState("all");
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const debouncedSearch = useDebounce(search, 250);

  const filteredAccounts = useMemo(() => {
    return accounts.filter((account) => {
      const matchesSearch =
        !debouncedSearch ||
        account.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        account.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        account.owner.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || account.status === statusFilter;

      const matchesTier =
        tierFilter === "all" || account.tier === tierFilter;

      return matchesSearch && matchesStatus && matchesTier;
    });
  }, [debouncedSearch, statusFilter, tierFilter]);

  const columns = [
    {
      key: "name",
      label: "Account",
      render: (account: Account) => (
        <div className="flex items-center gap-3">
          <Avatar name={account.name} size="sm" />
          <div>
            <p className="text-sm font-medium text-content">{account.name}</p>
            <p className="text-xs text-content-tertiary">{account.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (account: Account) => {
        const colors = STATUS_COLORS[account.status];
        return (
          <Badge className={`${colors.bg} ${colors.text}`}>
            {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
          </Badge>
        );
      },
    },
    {
      key: "tier",
      label: "Tier",
      render: (account: Account) => {
        const colors = TIER_COLORS[account.tier];
        return (
          <Badge className={`${colors.bg} ${colors.text}`}>
            {TIER_LABELS[account.tier]}
          </Badge>
        );
      },
    },
    {
      key: "mrr",
      label: "MRR",
      render: (account: Account) => (
        <span className="text-sm font-medium text-content">
          {account.mrr > 0 ? formatCurrency(account.mrr) : "—"}
        </span>
      ),
    },
    {
      key: "owner",
      label: "Owner",
      className: "hidden lg:table-cell",
      render: (account: Account) => (
        <span className="text-sm text-content-secondary">{account.owner}</span>
      ),
    },
    {
      key: "lastActivity",
      label: "Last Active",
      className: "hidden md:table-cell",
      render: (account: Account) => (
        <span className="text-sm text-content-secondary">
          {formatRelativeDate(account.lastActivity)}
        </span>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Accounts"
        description="Manage your customer accounts and subscriptions"
        actions={<Button size="sm">Add Account</Button>}
      />

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <SummaryCard label="Total Accounts" value={accounts.length.toString()} />
        <SummaryCard
          label="Active"
          value={accounts.filter((a) => a.status === "active").length.toString()}
        />
        <SummaryCard
          label="Total MRR"
          value={formatCurrency(accounts.reduce((sum, a) => sum + a.mrr, 0))}
        />
        <SummaryCard
          label="Avg. Revenue"
          value={formatCurrency(
            Math.round(
              accounts.filter((a) => a.mrr > 0).reduce((sum, a) => sum + a.mrr, 0) /
                accounts.filter((a) => a.mrr > 0).length
            )
          )}
        />
      </div>

      {/* Filters */}
      <Card>
        <div className="border-b border-surface-border px-4 py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex-1 max-w-sm">
              <SearchInput
                value={search}
                onChange={setSearch}
                placeholder="Search accounts..."
              />
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-9 rounded-md border border-surface-border bg-surface px-3 text-sm text-content"
              >
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <select
                value={tierFilter}
                onChange={(e) => setTierFilter(e.target.value)}
                className="h-9 rounded-md border border-surface-border bg-surface px-3 text-sm text-content"
              >
                {tierOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={filteredAccounts}
          keyField="id"
          onRowClick={setSelectedAccount}
          emptyMessage="No accounts match your filters"
        />
        <div className="border-t border-surface-border px-4 py-3">
          <p className="text-xs text-content-tertiary">
            Showing {filteredAccounts.length} of {accounts.length} accounts
          </p>
        </div>
      </Card>

      {/* Detail Drawer */}
      {selectedAccount && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setSelectedAccount(null)}
          />
          <AccountDetail
            account={selectedAccount}
            onClose={() => setSelectedAccount(null)}
          />
        </>
      )}
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="py-4">
        <p className="text-sm text-content-secondary">{label}</p>
        <p className="mt-1 text-xl font-semibold text-content">{value}</p>
      </CardContent>
    </Card>
  );
}
