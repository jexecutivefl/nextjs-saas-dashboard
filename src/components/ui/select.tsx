import { cn } from "@/lib/utils";
import { type SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-content">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            "flex h-9 w-full rounded border border-surface-border bg-surface px-3 py-1.5 text-sm text-content shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
