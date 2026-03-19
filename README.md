# SaaSBoard — Next.js SaaS Dashboard

A production-quality SaaS business operations dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Designed as a portfolio-grade demonstration of modern full-stack engineering, dashboard UX, and scalable component architecture.

## Preview

A polished, responsive admin dashboard that simulates a real business operations platform — the kind of tool startups and SaaS companies pay to have built.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3.4 with custom design tokens |
| Charts | Recharts (React + D3) |
| Utilities | clsx, date-fns |
| Architecture | Component-driven, feature-isolated, auth-ready |

## Features

### Dashboard Home
- 6 KPI metric cards with trend indicators
- Revenue trend area chart (actual vs target)
- Account growth bar chart (new vs churned)
- Real-time activity feed with categorized events
- Alert panel with actionable warnings
- Quick actions grid

### Accounts & Customers
- Searchable, filterable data table (20+ accounts)
- Status badges (active, trial, paused, churned)
- Subscription tier badges (starter, professional, enterprise)
- Slide-over detail drawer with full account info
- Summary cards (total accounts, active, MRR, avg revenue)

### Workflow & Tasks
- 15 realistic tasks across multiple projects
- Card-based task view with priority & status badges
- Workflow health summary (counts by status)
- Tab-based filtering with search
- Due date tracking with overdue highlighting

### Billing & Revenue
- MRR, ARR, ARPA, and NRR metric cards
- Plan distribution donut chart (Starter/Professional/Enterprise)
- Top accounts by revenue with progress bars
- Invoice table with status badges
- Full billing lifecycle visualization

### Settings
- 5-tab settings navigation (Organization, Profile, Notifications, Integrations, Security)
- Form inputs, toggles, and configuration patterns
- Integration cards with connect/configure states
- Session management and 2FA placeholders
- Realistic admin UX patterns

### Infrastructure
- Loading skeletons for every route
- Error boundary with retry
- Auth-ready route group structure `(dashboard)` / `(auth)`
- Mobile-responsive sidebar with overlay
- Custom design token system

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (dashboard)/        # Dashboard route group
│   │   ├── page.tsx        # Dashboard home
│   │   ├── accounts/       # Accounts page
│   │   ├── workflows/      # Workflows page
│   │   ├── billing/        # Billing page
│   │   ├── settings/       # Settings page
│   │   ├── loading.tsx     # Dashboard loading skeleton
│   │   └── error.tsx       # Error boundary
│   ├── (auth)/             # Auth route group
│   │   └── login/          # Login page placeholder
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles + design tokens
├── components/
│   ├── ui/                 # Reusable primitives (Button, Badge, Card, etc.)
│   ├── dashboard/          # Feature components (KPI, activity, tasks, etc.)
│   ├── tables/             # Data table, search, filters
│   ├── charts/             # Recharts wrappers (area, bar, pie)
│   ├── forms/              # Form components
│   └── layout/             # Shell, sidebar, header, icons
├── lib/                    # Utilities (cn, formatters)
├── data/                   # Mock data (accounts, tasks, billing, activity)
├── types/                  # TypeScript type definitions
├── hooks/                  # Custom hooks (useDebounce, useMobile)
└── config/                 # App config and design constants
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Architecture Highlights

- **Route Groups**: `(dashboard)` and `(auth)` provide layout separation and auth-ready structure
- **Component Isolation**: UI primitives, feature components, and page components are strictly separated
- **Type Safety**: Shared TypeScript types define all data contracts upfront
- **Mock Data Layer**: Realistic data that can be swapped for real API calls without UI changes
- **Design Token System**: Custom Tailwind config with semantic colors (surface, content, success, warning, error)
- **Responsive**: Full mobile support with collapsible sidebar and adaptive layouts

## Why This Project

This dashboard demonstrates the ability to:
- Architect scalable Next.js applications from scratch
- Build premium, production-quality UI with Tailwind CSS
- Design reusable component systems that scale
- Model realistic business data and domain logic
- Create responsive, accessible dashboard experiences
- Structure code for team collaboration and maintainability

## License

MIT
