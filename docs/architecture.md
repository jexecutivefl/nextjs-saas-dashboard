# Architecture Document

## System Overview

SaaSBoard is a client-side rendered Next.js 14 application using the App Router. It simulates a business operations SaaS dashboard with mock data that mirrors real-world API contracts.

## Route Structure

```
/                → Dashboard home (KPIs, charts, activity)
/accounts        → Customer account management
/workflows       → Task and workflow tracking
/billing         → Revenue and invoice management
/settings        → Organization and user settings
/login           → Authentication placeholder
```

### Route Groups

- `(dashboard)` — wraps all main app pages with `DashboardShell` (sidebar + header + content)
- `(auth)` — wraps authentication pages with centered layout (no sidebar)

This structure allows adding authentication middleware without touching existing page code.

## Component Architecture

### Layer 1: UI Primitives (`components/ui/`)
Stateless, reusable building blocks: Button, Badge, Card, Input, Select, Avatar, Skeleton, EmptyState, StatusDot.

### Layer 2: Layout Components (`components/layout/`)
Application shell: DashboardShell, Sidebar, Header, PageHeader, Icons.

### Layer 3: Feature Components (`components/dashboard/`, `components/tables/`, `components/charts/`)
Domain-specific components that compose UI primitives with business logic.

### Layer 4: Pages (`app/(dashboard)/*/page.tsx`)
Route-level components that compose feature components and wire up data.

## Data Flow

```
Mock Data (src/data/) → Page Component → Feature Component → UI Primitive
```

The mock data layer is designed so that swapping to real API calls requires changing only the data source in page components. Feature components accept typed props and are API-agnostic.

## Type System

All data contracts are defined in `src/types/`:
- `Account`, `AccountStatus`, `SubscriptionTier`
- `Task`, `TaskStatus`, `TaskPriority`, `WorkflowSummary`
- `Invoice`, `BillingStatus`, `RevenueMetric`, `PlanDistribution`, `MonthlyRevenue`
- `ActivityItem`, `ActivityType`
- `NavItem`, `NavGroup`

## Design Token System

Custom Tailwind tokens in `tailwind.config.ts`:
- **Surface colors**: `surface`, `surface-secondary`, `surface-tertiary`, `surface-border`, `surface-hover`
- **Content colors**: `content`, `content-secondary`, `content-tertiary`, `content-inverse`
- **Semantic colors**: `success`, `warning`, `error`, `info` (each with `light`, `DEFAULT`, `dark`)
- **Brand colors**: `brand-50` through `brand-950`
- **Custom shadows**: `card`, `card-hover`, `dropdown`

## Scaling Path

### Adding Authentication
1. Implement auth provider (NextAuth.js, Clerk, etc.)
2. Add middleware to protect `(dashboard)` routes
3. Build out `(auth)` route group pages
4. No changes needed to existing dashboard components

### Adding Real API
1. Replace mock data imports with API calls (fetch/SWR/React Query)
2. Types already match expected API response shapes
3. Add API route handlers in `app/api/`

### Adding Database
1. Add Prisma/Drizzle ORM
2. Seed database with existing mock data
3. Create API routes that query the database

## Future Backend Plan

| Feature | Technology | Notes |
|---------|-----------|-------|
| Authentication | NextAuth.js or Clerk | Session-based, supports SSO |
| Database | PostgreSQL + Prisma | Type-safe ORM |
| Payments | Stripe | Already modeled in billing types |
| File Storage | S3/R2 | For avatars, exports |
| Search | Algolia or Meilisearch | Full-text search for accounts/tasks |
| Analytics | PostHog or Mixpanel | Usage tracking |
| Email | Resend or SendGrid | Notification delivery |
