import { Skeleton, SkeletonTable, SkeletonCard } from "@/components/ui/skeleton";

export default function AccountsLoading() {
  return (
    <div>
      <div className="mb-6">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-2 h-4 w-64" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
      <div className="rounded-lg border border-surface-border bg-surface p-4">
        <SkeletonTable rows={8} />
      </div>
    </div>
  );
}
