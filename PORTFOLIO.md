# SaaSBoard — Portfolio Project

## Portfolio Summary

Built a full-featured SaaS operations dashboard with real-time KPIs, AI-powered business insights, account management, workflow tracking, and billing analytics. Built with Next.js 14, TypeScript, and Tailwind CSS — designed for scale, maintainability, and a premium user experience.

---

## Problem → Solution → Outcome

**Problem**: SaaS companies struggle to get a unified view of their business metrics, customer health, and team workflows. Data lives in silos across Stripe, CRMs, and project tools — making it hard to spot trends or act fast.

**Solution**: A centralized operations dashboard that consolidates revenue analytics, account management, task tracking, and AI-powered insights into a single interface. Real-time KPIs, smart alerts, and one-click actions replace scattered spreadsheets and manual reporting.

**Outcome**: Faster decision-making, reduced churn through proactive risk detection, and improved team efficiency through actionable data — all accessible in under 60 seconds.

---

## Feature List

- **Real-time KPI Dashboard** — 6 key metrics (MRR, active accounts, task completion, CSAT, trials, churn) with trend indicators and staggered load animations
- **Revenue Analytics** — Area charts tracking revenue vs targets, bar charts for account growth vs churn, monthly revenue breakdowns
- **AI-Powered Insights** — Intelligent business recommendations with category tagging (Revenue, Risk, Performance, Growth), animated reveal, and refresh capability
- **Account Management** — Searchable, filterable data table with 20+ accounts, status/tier badges, detail drawers, and one-click account creation via modal forms
- **Workflow Tracking** — Task card grid with priority/status visualization, assignee tracking, overdue detection, and inline task creation
- **Billing & Invoices** — Revenue metrics (MRR, ARR, ARPA, NRR), plan distribution charts, top accounts by revenue, and invoice status tracking
- **Command Palette Search** — Ctrl+K powered global search across accounts, tasks, and pages with keyboard navigation
- **Notification System** — Real-time notification panel with unread indicators, mark-all-read, and event categorization
- **Professional Login** — Split-screen authentication with branded panel, social login buttons, and smooth loading states
- **Settings Hub** — 5-tab configuration (Organization, Profile, Notifications, Integrations, Security) with toggle switches and integration cards
- **Toast Notifications** — Contextual feedback for all user actions (success, error, info variants)
- **Responsive Design** — Full mobile support with collapsible sidebar, adaptive layouts, and touch-friendly interactions

---

## What I Built

This is a **Next.js 14 App Router** application demonstrating modern full-stack architecture patterns:

- **Frontend**: React 18 + TypeScript + Tailwind CSS with a custom design token system
- **Component Architecture**: Layered design (UI primitives → feature components → page compositions) with 30+ reusable components
- **State Management**: React hooks with optimistic UI updates, debounced search, and local state patterns
- **Data Layer**: Typed mock data with realistic cross-references (accounts ↔ invoices ↔ activity)
- **UX Patterns**: Modals, drawers, toasts, command palette, staggered animations, loading states, error boundaries
- **Charts**: Recharts integration with custom tooltips (area, bar, pie charts)
- **Accessibility**: Keyboard navigation, proper ARIA patterns, focus management
- **Performance**: Debounced inputs, memoized computations, code splitting via route groups

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3.4 + custom design tokens |
| Charts | Recharts |
| Date Handling | date-fns |
| Deployment | Vercel-ready |

---

## Demo Walkthrough Script (60 seconds)

1. **Login** (5s): Open the app → professional split-screen login → click "Sign In" → smooth loading transition to dashboard

2. **Dashboard Overview** (10s): KPI cards cascade in with staggered animation → "Here's the real-time business overview — revenue, active accounts, churn rate, all at a glance"

3. **AI Insights** (10s): Scroll to AI panel → insights animate in → "The AI layer analyzes your data and surfaces actionable recommendations — churn risk, revenue trends, team performance"

4. **Account Management** (10s): Navigate to Accounts → "Full account management with search, filters, and detail views" → Click "Add Account" → fill modal → submit → toast confirmation → new row appears

5. **Workflow Tracking** (10s): Navigate to Workflows → "Task management with priorities, assignees, and overdue detection" → Click "Create Task" → fill form → submit

6. **Search** (5s): Press Ctrl+K → type a query → "Global search across everything — accounts, tasks, pages — with keyboard navigation"

7. **Billing** (5s): Navigate to Billing → "Revenue analytics with charts, plan distribution, and invoice tracking"

8. **Close** (5s): "Built with Next.js, TypeScript, and Tailwind. Clean architecture, fully responsive, and ready to extend with real APIs and authentication."
