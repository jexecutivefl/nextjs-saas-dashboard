import { PageHeader } from "@/components/layout/page-header";
import { KPICard } from "@/components/dashboard/kpi-card";
import { RevenueAreaChart } from "@/components/charts/area-chart";
import { GrowthBarChart } from "@/components/charts/bar-chart";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { AlertsPanel } from "@/components/dashboard/alerts-panel";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { AIInsightsPanel } from "@/components/dashboard/ai-insights";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { kpiData, revenueChartData, growthChartData } from "@/data/dashboard";
import { activityFeed, alerts } from "@/data/activity";
import { formatCurrencyCompact, formatPercent } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overview of your business operations"
      />

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <KPICard
          label={kpiData.totalRevenue.label}
          value={formatCurrencyCompact(kpiData.totalRevenue.value)}
          change={kpiData.totalRevenue.change}
          index={0}
        />
        <KPICard
          label={kpiData.activeAccounts.label}
          value={kpiData.activeAccounts.value.toString()}
          change={kpiData.activeAccounts.change}
          index={1}
        />
        <KPICard
          label={kpiData.taskCompletion.label}
          value={`${kpiData.taskCompletion.value}%`}
          change={kpiData.taskCompletion.change}
          index={2}
        />
        <KPICard
          label={kpiData.customerSatisfaction.label}
          value={`${kpiData.customerSatisfaction.value}%`}
          change={kpiData.customerSatisfaction.change}
          index={3}
        />
        <KPICard
          label={kpiData.newTrials.label}
          value={kpiData.newTrials.value.toString()}
          change={kpiData.newTrials.change}
          index={4}
        />
        <KPICard
          label={kpiData.churnRate.label}
          value={`${kpiData.churnRate.value}%`}
          change={kpiData.churnRate.change}
          invertTrend
          index={5}
        />
      </div>

      {/* Charts Row */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-content">Revenue Trend</h3>
                <p className="text-sm text-content-secondary">
                  Monthly revenue vs target
                </p>
              </div>
              <span className="text-xs text-content-tertiary">Last 6 months</span>
            </div>
          </CardHeader>
          <CardContent>
            <RevenueAreaChart data={revenueChartData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-content">Account Growth</h3>
                <p className="text-sm text-content-secondary">
                  New accounts vs churn
                </p>
              </div>
              <span className="text-xs text-content-tertiary">Last 6 months</span>
            </div>
          </CardHeader>
          <CardContent>
            <GrowthBarChart data={growthChartData} />
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <div className="mt-6">
        <AIInsightsPanel />
      </div>

      {/* Bottom Row */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* Activity Feed */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-content">Recent Activity</h3>
              <span className="text-xs text-content-tertiary">
                {activityFeed.length} events
              </span>
            </div>
          </CardHeader>
          <CardContent className="max-h-[400px] overflow-y-auto scrollbar-thin">
            <ActivityFeed items={activityFeed} limit={10} />
          </CardContent>
        </Card>

        {/* Right Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <h3 className="font-medium text-content">Alerts</h3>
            </CardHeader>
            <CardContent>
              <AlertsPanel alerts={alerts} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="font-medium text-content">Quick Actions</h3>
            </CardHeader>
            <CardContent>
              <QuickActions />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
