"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/providers/toast-provider";
import type { Task } from "@/types";

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
];

const assigneeOptions = [
  { value: "Sarah Chen", label: "Sarah Chen" },
  { value: "Emily Park", label: "Emily Park" },
  { value: "James Rodriguez", label: "James Rodriguez" },
  { value: "Alex Morgan", label: "Alex Morgan" },
];

const projectOptions = [
  { value: "Platform Security", label: "Platform Security" },
  { value: "Revenue Operations", label: "Revenue Operations" },
  { value: "Infrastructure", label: "Infrastructure" },
  { value: "Customer Success", label: "Customer Success" },
  { value: "Product", label: "Product" },
];

interface CreateTaskFormProps {
  onSubmit: (task: Task) => void;
  onCancel: () => void;
}

let taskCounter = 100;

export function CreateTaskForm({ onSubmit, onCancel }: CreateTaskFormProps) {
  const { addToast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [assignee, setAssignee] = useState("Sarah Chen");
  const [project, setProject] = useState("Product");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    const newTask: Task = {
      id: `task-${++taskCounter}`,
      title: title.trim(),
      description: description.trim() || "No description provided",
      status: "todo",
      priority: priority as Task["priority"],
      assignee,
      dueDate: dueDate.toISOString(),
      createdAt: new Date().toISOString(),
      tags: [project.toLowerCase().replace(/\s+/g, "-")],
      project,
    };

    onSubmit(newTask);
    addToast(`Task "${title}" created successfully`, "success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="task-title"
        label="Task Title"
        placeholder="e.g. Update user onboarding flow"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <div className="space-y-1.5">
        <label htmlFor="task-description" className="block text-sm font-medium text-content">
          Description
        </label>
        <textarea
          id="task-description"
          placeholder="Describe the task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="flex w-full rounded border border-surface-border bg-surface px-3 py-2 text-sm text-content shadow-sm placeholder:text-content-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-brand-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Select
          id="task-priority"
          label="Priority"
          options={priorityOptions}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <Select
          id="task-assignee"
          label="Assignee"
          options={assigneeOptions}
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
      </div>
      <Select
        id="task-project"
        label="Project"
        options={projectOptions}
        value={project}
        onChange={(e) => setProject(e.target.value)}
      />

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Create Task</Button>
      </div>
    </form>
  );
}
