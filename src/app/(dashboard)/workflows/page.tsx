"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/tables/search-input";
import { tasks, workflowSummary } from "@/data/tasks";
import { formatDate, cn } from "@/lib/utils";
import { TASK_STATUS_COLORS, PRIORITY_COLORS } from "@/config/constants";
import { useDebounce } from "@/hooks/use-debounce";
import type { Task, TaskStatus } from "@/types";
import { CalendarIcon } from "@/components/layout/icons";

const statusFilters: { value: TaskStatus | "all"; label: string }[] = [
  { value: "all", label: "All Tasks" },
  { value: "todo", label: "To Do" },
  { value: "in_progress", label: "In Progress" },
  { value: "review", label: "Review" },
  { value: "done", label: "Done" },
];

export default function WorkflowsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<TaskStatus | "all">("all");
  const debouncedSearch = useDebounce(search, 250);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        !debouncedSearch ||
        task.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        task.assignee.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesStatus =
        activeFilter === "all" || task.status === activeFilter;

      return matchesSearch && matchesStatus;
    });
  }, [debouncedSearch, activeFilter]);

  return (
    <div>
      <PageHeader
        title="Workflows"
        description="Track tasks, priorities, and team progress"
        actions={<Button size="sm">Create Task</Button>}
      />

      {/* Health Summary */}
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-6">
        <HealthCard label="Total" value={workflowSummary.total} color="bg-slate-500" />
        <HealthCard label="To Do" value={workflowSummary.todo} color="bg-slate-400" />
        <HealthCard label="In Progress" value={workflowSummary.inProgress} color="bg-brand-500" />
        <HealthCard label="Review" value={workflowSummary.review} color="bg-warning" />
        <HealthCard label="Done" value={workflowSummary.done} color="bg-success" />
        <HealthCard label="Overdue" value={workflowSummary.overdue} color="bg-error" />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-4">
        <div className="flex-1 max-w-sm">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search tasks..."
          />
        </div>
        <div className="flex gap-1 flex-wrap">
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                activeFilter === filter.value
                  ? "bg-brand-600 text-white"
                  : "bg-surface border border-surface-border text-content-secondary hover:bg-surface-hover"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Task Cards */}
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <p className="text-sm text-content-secondary">No tasks match your filters</p>
        </div>
      )}
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const statusStyle = TASK_STATUS_COLORS[task.status];
  const priorityStyle = PRIORITY_COLORS[task.priority];
  const isOverdue = task.status !== "done" && new Date(task.dueDate) < new Date();

  return (
    <Card hover>
      <CardContent className="py-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium text-content leading-snug flex-1">
            {task.title}
          </h4>
          <Badge className={`${priorityStyle.bg} ${priorityStyle.text} flex-shrink-0`}>
            {priorityStyle.label}
          </Badge>
        </div>

        <p className="text-xs text-content-secondary line-clamp-2">
          {task.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-surface-tertiary px-1.5 py-0.5 text-2xs text-content-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-surface-border">
          <div className="flex items-center gap-2">
            <Avatar name={task.assignee} size="sm" />
            <span className="text-xs text-content-secondary">{task.assignee}</span>
          </div>

          <div className="flex items-center gap-3">
            <Badge className={`${statusStyle.bg} ${statusStyle.text}`}>
              {statusStyle.label}
            </Badge>
            <span
              className={cn(
                "flex items-center gap-1 text-xs",
                isOverdue ? "text-error font-medium" : "text-content-tertiary"
              )}
            >
              <CalendarIcon className="h-3 w-3" />
              {formatDate(task.dueDate)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function HealthCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <Card>
      <CardContent className="py-4 flex items-center gap-3">
        <div className={cn("h-2.5 w-2.5 rounded-full flex-shrink-0", color)} />
        <div>
          <p className="text-xs text-content-secondary">{label}</p>
          <p className="text-lg font-semibold text-content">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
