# SaaSBoard — Manual Test Plan

> Use this checklist to verify the app is demo-ready before showcasing on your Upwork portfolio.

## Prerequisites

- [ ] Run `npm install` — no errors
- [ ] Run `npm run build` — builds without errors or warnings
- [ ] Run `npm run dev` — app starts on `http://localhost:3000`
- [ ] Run `npm run lint` — no lint errors

---

## 1. Dashboard Home (`/`)

### KPI Cards
- [ ] All 6 KPI cards render (Revenue, Active Accounts, Task Completion, Customer Satisfaction, New Trials, Churn Rate)
- [ ] Each card shows a value, percentage change, and trend arrow
- [ ] Positive trends display in green, negative in red
- [ ] Churn Rate uses inverted trend logic (decrease = green)

### Charts
- [ ] Revenue Trend area chart renders with 6 months of data
- [ ] Hovering over the chart shows a tooltip with revenue and target values
- [ ] Account Growth bar chart renders with new vs. churned accounts
- [ ] Hovering over bars shows a tooltip with correct values
- [ ] Charts resize correctly when the browser window is resized

### Activity Feed
- [ ] Recent Activity panel displays up to 10 items
- [ ] Each item shows a timestamp, category icon, and description
- [ ] Feed is scrollable when items overflow

### Alerts Panel
- [ ] Alerts display with appropriate warning/error styling
- [ ] Alert text is readable and not truncated

### Quick Actions
- [ ] Quick action buttons render in a grid
- [ ] Buttons are clickable (visual feedback on hover/click)

---

## 2. Accounts Page (`/accounts`)

### Summary Cards
- [ ] 4 summary cards render (Total Accounts, Active, Total MRR, Avg Revenue)
- [ ] Values are formatted correctly (currency with `$`, numbers with commas)

### Data Table
- [ ] Table displays all accounts with columns: Name, Status, Tier, MRR, Owner, Last Activity
- [ ] Account names display with an avatar
- [ ] Status badges are color-coded (Active=green, Trial=blue, Paused=amber, Churned=red)
- [ ] Tier badges display correctly (Starter, Professional, Enterprise)
- [ ] MRR values are formatted as currency

### Search & Filters
- [ ] Typing in the search box filters accounts by name, email, or owner
- [ ] Search is debounced (slight delay before filtering)
- [ ] Status dropdown filters accounts correctly for each option
- [ ] Tier dropdown filters accounts correctly for each option
- [ ] Combining search + status + tier filters works correctly
- [ ] Clearing filters restores the full account list

### Account Detail Panel
- [ ] Clicking a table row opens a slide-over detail panel
- [ ] Panel shows account avatar, name, status, and tier
- [ ] Details section shows revenue, owner, industry, employees, dates
- [ ] Close button dismisses the panel
- [ ] "Edit Account" and "View History" buttons are present

---

## 3. Workflows Page (`/workflows`)

### Health Summary
- [ ] 6 metric cards render (Total, To Do, In Progress, Review, Done, Overdue)
- [ ] Counts match the number of visible task cards when filtered

### Task Cards
- [ ] Task cards display in a responsive grid
- [ ] Each card shows title, priority badge, description, tags, assignee, status, and due date
- [ ] Priority badges are color-coded (Critical=red, High=orange, Medium=blue, Low=gray)
- [ ] Overdue tasks are highlighted in red
- [ ] Description text is clamped to 2 lines

### Search & Filtering
- [ ] Search filters tasks by title or assignee name
- [ ] Status tabs filter tasks correctly (All, To Do, In Progress, Review, Done)
- [ ] Combining search + status tab works correctly

---

## 4. Billing Page (`/billing`)

### Revenue Metrics
- [ ] 4 metric cards render (MRR, ARR, ARPA, NRR)
- [ ] Values are formatted correctly (currency and percentages)
- [ ] Percentage change indicators show with correct colors

### Plan Distribution Chart
- [ ] Donut chart renders with 3 segments (Starter, Professional, Enterprise)
- [ ] Chart has a legend with plan names and revenue values
- [ ] Colors match the legend

### Top Accounts by Revenue
- [ ] Ranked list (1–6) displays with progress bars
- [ ] Revenue values are formatted as currency
- [ ] Progress bars show relative size comparison

### Invoices Table
- [ ] Table displays invoices with columns: Account, Amount, Plan, Status, Date, Due Date
- [ ] Status badges are color-coded (Paid=green, Pending=amber, Overdue=red, Failed=red)
- [ ] Dates are formatted consistently

---

## 5. Settings Page (`/settings`)

### Tab Navigation
- [ ] All 5 tabs are visible (Organization, Profile, Notifications, Integrations, Security)
- [ ] Clicking each tab switches the content area
- [ ] Active tab is visually highlighted

### Organization Tab
- [ ] Form fields render (Organization name, Domain, Timezone)
- [ ] Timezone dropdown opens and shows options
- [ ] "Save Changes" button is present and clickable
- [ ] Current billing plan info is displayed

### Profile Tab
- [ ] Avatar with initials displays
- [ ] Form fields render (Display name, Email, Role)
- [ ] Role field is disabled
- [ ] "Save Profile" button is present

### Notifications Tab
- [ ] Email notification toggles render (5 toggles)
- [ ] Push notification toggles render (3 toggles)
- [ ] Toggles are clickable and switch visually between on/off

### Integrations Tab
- [ ] 6 integration cards render (Slack, Stripe, GitHub, Salesforce, Zapier, HubSpot)
- [ ] Each shows a name, description, and status (Connected/Not connected)
- [ ] Buttons show "Configure" for connected and "Connect" for disconnected

### Security Tab
- [ ] Password change form renders (Current, New, Confirm fields)
- [ ] Two-Factor Authentication section displays
- [ ] Active Sessions list shows device, location, and last active time
- [ ] "Revoke" buttons appear for non-current sessions

---

## 6. Login Page (`/auth/login`)

- [ ] Page renders with centered card layout
- [ ] Logo/branding icon displays
- [ ] Email and Password input fields render
- [ ] "Sign In" button is present
- [ ] Demo notice text is visible ("Auth is not implemented" or similar)

---

## 7. Navigation & Layout

### Sidebar
- [ ] Sidebar displays with navigation links: Dashboard, Accounts, Workflows, Billing, Settings
- [ ] Active page is highlighted in the sidebar
- [ ] Clicking each link navigates to the correct page
- [ ] Sidebar collapses on mobile (hamburger menu)

### Header
- [ ] Header is sticky at the top of the page
- [ ] Search icon/input is present
- [ ] Notification bell icon is present
- [ ] User profile avatar displays in the top right

### Page Transitions
- [ ] Navigating between pages is smooth with no flash of unstyled content
- [ ] No broken layouts during navigation
- [ ] Browser back/forward buttons work correctly

---

## 8. Responsive Design

### Mobile (< 640px)
- [ ] Sidebar collapses into a hamburger menu
- [ ] KPI cards stack into a single column
- [ ] Tables are horizontally scrollable or columns hide gracefully
- [ ] Charts resize without overlapping text
- [ ] Settings tabs switch to horizontal scrollable layout
- [ ] All text is readable without horizontal scrolling

### Tablet (640px–1024px)
- [ ] KPI cards display in a 2-column grid
- [ ] Task cards display in a 2-column grid
- [ ] Charts and tables fit the viewport
- [ ] Sidebar may collapse or remain visible depending on breakpoint

### Desktop (> 1024px)
- [ ] Full sidebar is visible
- [ ] KPI cards display in a 3-column or 6-column grid
- [ ] Task cards display in a 3-column grid
- [ ] All table columns are visible
- [ ] Charts are properly sized with readable labels

---

## 9. Cross-Browser Testing

Test the following browsers at a minimum:

| Browser          | Dashboard | Accounts | Workflows | Billing | Settings | Responsive |
|------------------|-----------|----------|-----------|---------|----------|------------|
| Chrome (latest)  | [ ]       | [ ]      | [ ]       | [ ]     | [ ]      | [ ]        |
| Firefox (latest) | [ ]       | [ ]      | [ ]       | [ ]     | [ ]      | [ ]        |
| Safari (latest)  | [ ]       | [ ]      | [ ]       | [ ]     | [ ]      | [ ]        |
| Edge (latest)    | [ ]       | [ ]      | [ ]       | [ ]     | [ ]      | [ ]        |

---

## 10. Visual Polish & Demo Readiness

- [ ] No console errors or warnings in browser DevTools
- [ ] No broken images or missing icons
- [ ] All text is free of typos and placeholder content (e.g., "Lorem ipsum")
- [ ] Color scheme is consistent across all pages
- [ ] Hover states work on all interactive elements (buttons, table rows, links)
- [ ] Focus outlines appear when navigating with keyboard (Tab key)
- [ ] No layout shifts or janky animations
- [ ] Empty states display gracefully when filters return no results
- [ ] Currency, date, and number formatting is consistent throughout
- [ ] The app loads within a reasonable time (< 3 seconds on a standard connection)

---

## Notes

- Authentication is **not implemented** — this is expected for a demo. The login page is placeholder only.
- All data is **mock/static** — no real API calls are made. This is by design for the portfolio demo.
- If any checkbox fails, note the issue and fix it before demoing.
