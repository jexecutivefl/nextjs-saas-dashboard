"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/providers/toast-provider";
import type { Account } from "@/types";

const tierOptions = [
  { value: "starter", label: "Starter" },
  { value: "professional", label: "Professional" },
  { value: "enterprise", label: "Enterprise" },
];

const industryOptions = [
  { value: "Technology", label: "Technology" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Finance", label: "Finance" },
  { value: "Energy", label: "Energy" },
  { value: "Retail", label: "Retail" },
  { value: "Legal", label: "Legal" },
  { value: "Other", label: "Other" },
];

interface AddAccountFormProps {
  onSubmit: (account: Account) => void;
  onCancel: () => void;
}

let accountCounter = 100;

export function AddAccountForm({ onSubmit, onCancel }: AddAccountFormProps) {
  const { addToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState("professional");
  const [industry, setIndustry] = useState("Technology");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    const newAccount: Account = {
      id: `acc-${++accountCounter}`,
      name: name.trim(),
      email: email.trim(),
      status: "trial",
      tier: tier as Account["tier"],
      mrr: 0,
      owner: "Alex Morgan",
      lastActivity: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      industry,
      employees: 50,
    };

    onSubmit(newAccount);
    addToast(`${name} has been added successfully`, "success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="account-name"
        label="Company Name"
        placeholder="e.g. Acme Corporation"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        id="account-email"
        label="Email"
        type="email"
        placeholder="billing@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Select
        id="account-tier"
        label="Plan Tier"
        options={tierOptions}
        value={tier}
        onChange={(e) => setTier(e.target.value)}
      />
      <Select
        id="account-industry"
        label="Industry"
        options={industryOptions}
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      />

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Account</Button>
      </div>
    </form>
  );
}
