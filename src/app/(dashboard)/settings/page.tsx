"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SettingsTab = "organization" | "profile" | "notifications" | "integrations" | "security";

const tabs: { value: SettingsTab; label: string }[] = [
  { value: "organization", label: "Organization" },
  { value: "profile", label: "Profile" },
  { value: "notifications", label: "Notifications" },
  { value: "integrations", label: "Integrations" },
  { value: "security", label: "Security" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("organization");

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Manage your organization, preferences, and integrations"
      />

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Sidebar Nav */}
        <nav className="flex flex-row gap-1 lg:flex-col lg:w-48 lg:flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-left transition-colors",
                activeTab === tab.value
                  ? "bg-brand-50 text-brand-700"
                  : "text-content-secondary hover:bg-surface-hover hover:text-content"
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {activeTab === "organization" && <OrganizationSettings />}
          {activeTab === "profile" && <ProfileSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "integrations" && <IntegrationsSettings />}
          {activeTab === "security" && <SecuritySettings />}
        </div>
      </div>
    </div>
  );
}

function SettingsSection({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-medium text-content">{title}</h3>
        {description && <p className="text-sm text-content-secondary mt-0.5">{description}</p>}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}

function Toggle({ label, description, defaultChecked = false }: { label: string; description?: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between py-1">
      <div>
        <p className="text-sm font-medium text-content">{label}</p>
        {description && <p className="text-xs text-content-secondary mt-0.5">{description}</p>}
      </div>
      <button
        onClick={() => setChecked(!checked)}
        className={cn(
          "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
          checked ? "bg-brand-600" : "bg-slate-300"
        )}
      >
        <span
          className={cn(
            "inline-block h-4 w-4 rounded-full bg-white transition-transform shadow-sm",
            checked ? "translate-x-4.5 ml-[18px]" : "translate-x-0.5 ml-[2px]"
          )}
        />
      </button>
    </div>
  );
}

function OrganizationSettings() {
  return (
    <>
      <SettingsSection title="Organization Details" description="Basic information about your organization">
        <Input id="org-name" label="Organization Name" defaultValue="Acme Corp" />
        <Input id="org-domain" label="Domain" defaultValue="acmecorp.com" />
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-content">Timezone</label>
          <select className="flex h-9 w-full rounded border border-surface-border bg-surface px-3 py-1.5 text-sm text-content">
            <option>America/New_York (EST)</option>
            <option>America/Chicago (CST)</option>
            <option>America/Denver (MST)</option>
            <option>America/Los_Angeles (PST)</option>
            <option>Europe/London (GMT)</option>
          </select>
        </div>
        <div className="pt-2">
          <Button size="sm">Save Changes</Button>
        </div>
      </SettingsSection>

      <SettingsSection title="Billing Plan" description="Your current subscription and usage">
        <div className="flex items-center justify-between rounded-lg border border-surface-border p-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-content">Enterprise Plan</p>
              <Badge variant="success">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-content-secondary">
              $499/mo · Billed annually · Renews Apr 15, 2026
            </p>
          </div>
          <Button variant="outline" size="sm">Manage Plan</Button>
        </div>
      </SettingsSection>
    </>
  );
}

function ProfileSettings() {
  return (
    <SettingsSection title="Profile Settings" description="Your personal account settings">
      <div className="flex items-center gap-4 pb-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-lg font-semibold text-brand-700">
          AM
        </div>
        <div>
          <Button variant="outline" size="sm">Change Photo</Button>
        </div>
      </div>
      <Input id="display-name" label="Display Name" defaultValue="Alex Morgan" />
      <Input id="email" label="Email" type="email" defaultValue="alex.morgan@acmecorp.com" />
      <Input id="role" label="Role" defaultValue="Admin" hint="Contact your organization admin to change your role" disabled />
      <div className="pt-2">
        <Button size="sm">Save Profile</Button>
      </div>
    </SettingsSection>
  );
}

function NotificationSettings() {
  return (
    <SettingsSection title="Notification Preferences" description="Choose how and when you receive notifications">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-content mb-3">Email Notifications</p>
          <div className="space-y-3 pl-1">
            <Toggle label="New account signups" description="Get notified when a new trial account is created" defaultChecked />
            <Toggle label="Payment received" description="Get notified when a payment is successfully processed" defaultChecked />
            <Toggle label="Payment failed" description="Get notified when a payment fails" defaultChecked />
            <Toggle label="Task assignments" description="Get notified when a task is assigned to you" defaultChecked />
            <Toggle label="Weekly digest" description="Receive a weekly summary of account activity" />
          </div>
        </div>

        <div className="border-t border-surface-border pt-4">
          <p className="text-sm font-medium text-content mb-3">Push Notifications</p>
          <div className="space-y-3 pl-1">
            <Toggle label="Critical alerts" description="System errors, security events, and urgent issues" defaultChecked />
            <Toggle label="Task updates" description="Changes to tasks you're assigned to or watching" />
            <Toggle label="Account activity" description="Important account changes and milestones" />
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

function IntegrationsSettings() {
  const integrations = [
    { name: "Slack", description: "Send notifications and alerts to Slack channels", connected: true, icon: "💬" },
    { name: "Stripe", description: "Process payments and manage subscriptions", connected: true, icon: "💳" },
    { name: "GitHub", description: "Link repositories and track deployments", connected: false, icon: "🐙" },
    { name: "Salesforce", description: "Sync customer data and CRM records", connected: false, icon: "☁️" },
    { name: "Zapier", description: "Connect with 5,000+ apps via automation", connected: false, icon: "⚡" },
    { name: "HubSpot", description: "Marketing automation and lead tracking", connected: false, icon: "🟠" },
  ];

  return (
    <SettingsSection title="Integrations" description="Connect your tools and services">
      <div className="space-y-3">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex items-center justify-between rounded-lg border border-surface-border p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{integration.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-content">{integration.name}</p>
                  {integration.connected && (
                    <Badge variant="success">Connected</Badge>
                  )}
                </div>
                <p className="text-xs text-content-secondary mt-0.5">
                  {integration.description}
                </p>
              </div>
            </div>
            <Button
              variant={integration.connected ? "outline" : "primary"}
              size="sm"
            >
              {integration.connected ? "Configure" : "Connect"}
            </Button>
          </div>
        ))}
      </div>
    </SettingsSection>
  );
}

function SecuritySettings() {
  return (
    <>
      <SettingsSection title="Password" description="Change your account password">
        <Input id="current-pw" label="Current Password" type="password" placeholder="Enter current password" />
        <Input id="new-pw" label="New Password" type="password" placeholder="Enter new password" />
        <Input id="confirm-pw" label="Confirm New Password" type="password" placeholder="Confirm new password" />
        <div className="pt-2">
          <Button size="sm">Update Password</Button>
        </div>
      </SettingsSection>

      <SettingsSection title="Two-Factor Authentication" description="Add an extra layer of security to your account">
        <div className="flex items-center justify-between rounded-lg border border-surface-border p-4">
          <div>
            <p className="text-sm font-medium text-content">Two-Factor Authentication</p>
            <p className="text-xs text-content-secondary mt-0.5">
              Protect your account with TOTP-based 2FA
            </p>
          </div>
          <Button variant="outline" size="sm">Enable 2FA</Button>
        </div>
      </SettingsSection>

      <SettingsSection title="Active Sessions" description="Manage your logged-in sessions">
        <div className="space-y-3">
          {[
            { device: "Chrome on macOS", location: "New York, US", current: true, lastActive: "Now" },
            { device: "Safari on iPhone", location: "New York, US", current: false, lastActive: "2h ago" },
            { device: "Firefox on Windows", location: "San Francisco, US", current: false, lastActive: "3d ago" },
          ].map((session) => (
            <div key={session.device} className="flex items-center justify-between py-2">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-content">{session.device}</p>
                  {session.current && <Badge variant="info">Current</Badge>}
                </div>
                <p className="text-xs text-content-tertiary mt-0.5">
                  {session.location} · {session.lastActive}
                </p>
              </div>
              {!session.current && (
                <Button variant="ghost" size="sm" className="text-error hover:text-error">
                  Revoke
                </Button>
              )}
            </div>
          ))}
        </div>
      </SettingsSection>
    </>
  );
}
