import { Skeleton, SkeletonCard, SkeletonTable } from "@/components/ui/skeleton";

export default function BillingLoading() {
  return (
    <div>
      <div className="mb-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-2 h-4 w-72" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3 mb-6">
        <div className="rounded-lg border border-surface-border bg-surface p-6">
          <Skeleton className="h-[240px] w-full" />
        </div>
        <div className="rounded-lg border border-surface-border bg-surface p-6 lg:col-span-2">
          <Skeleton className="h-5 w-48 mb-4" />
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full mb-2" />
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-surface-border bg-surface p-4">
        <SkeletonTable rows={6} />
      </div>
    </div>
  );
}
