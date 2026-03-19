import { SkeletonCard } from "@/components/ui/skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div>
      {/* Header skeleton */}
      <div className="mb-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-2 h-4 w-72" />
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-surface-border bg-surface p-6">
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-[300px] w-full" />
        </div>
        <div className="rounded-lg border border-surface-border bg-surface p-6">
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-[300px] w-full" />
        </div>
      </div>
    </div>
  );
}
