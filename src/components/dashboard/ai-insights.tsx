"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  insightSets,
  categoryConfig,
  type AIInsight,
} from "@/data/ai-insights";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  );
}

const impactColors = {
  high: "text-error",
  medium: "text-warning",
  low: "text-content-tertiary",
};

export function AIInsightsPanel() {
  const [setIndex, setSetIndex] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const [analyzing, setAnalyzing] = useState(true);

  const currentInsights = insightSets[setIndex];

  // Simulate AI analysis on mount and refresh
  useEffect(() => {
    setAnalyzing(true);
    setRevealedCount(0);

    const analyzeTimer = setTimeout(() => {
      setAnalyzing(false);
    }, 1200);

    return () => clearTimeout(analyzeTimer);
  }, [setIndex]);

  // Stagger reveal insights after analysis
  useEffect(() => {
    if (analyzing) return;
    if (revealedCount >= currentInsights.length) return;

    const timer = setTimeout(() => {
      setRevealedCount((prev) => prev + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [analyzing, revealedCount, currentInsights.length]);

  const handleRefresh = () => {
    setSetIndex((prev) => (prev + 1) % insightSets.length);
  };

  return (
    <Card className="border-brand-200 bg-gradient-to-br from-surface to-brand-50/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100">
              <SparkleIcon className="h-5 w-5 text-brand-600" />
            </div>
            <div>
              <h3 className="font-medium text-content">AI Insights</h3>
              <p className="text-xs text-content-secondary">
                Powered by business intelligence
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            disabled={analyzing}
            className="text-xs"
          >
            {analyzing ? (
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-brand-300 border-t-brand-600" />
                Analyzing...
              </span>
            ) : (
              "Refresh"
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {analyzing ? (
          <div className="flex flex-col items-center py-6 gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600" />
            <p className="text-sm text-content-secondary">
              Analyzing your business data...
            </p>
          </div>
        ) : (
          currentInsights.map((insight, index) => (
            <InsightCard
              key={insight.id}
              insight={insight}
              visible={index < revealedCount}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}

function InsightCard({
  insight,
  visible,
}: {
  insight: AIInsight;
  visible: boolean;
}) {
  const config = categoryConfig[insight.category];

  return (
    <div
      className={cn(
        "rounded-lg border border-surface-border bg-surface p-4 transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <Badge className={`${config.bg} ${config.color}`}>
            {config.label}
          </Badge>
          <span className="text-sm font-medium text-content">
            {insight.title}
          </span>
        </div>
        <span
          className={cn(
            "text-2xs font-medium uppercase",
            impactColors[insight.impact]
          )}
        >
          {insight.impact}
        </span>
      </div>
      <p className="text-xs text-content-secondary leading-relaxed">
        {insight.description}
      </p>
    </div>
  );
}
