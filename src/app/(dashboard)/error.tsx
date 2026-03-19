"use client";

import { Button } from "@/components/ui/button";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-error-light">
        <span className="text-2xl">⚠</span>
      </div>
      <h2 className="text-lg font-semibold text-content">Something went wrong</h2>
      <p className="mt-2 max-w-sm text-sm text-content-secondary">
        An unexpected error occurred. Please try again or contact support if the
        problem persists.
      </p>
      <Button onClick={reset} variant="primary" size="sm" className="mt-6">
        Try Again
      </Button>
    </div>
  );
}
