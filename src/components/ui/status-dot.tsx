import { cn } from "@/lib/utils";

interface StatusDotProps {
  color: "green" | "yellow" | "red" | "blue" | "gray";
  pulse?: boolean;
  className?: string;
}

const colorMap = {
  green: "bg-success",
  yellow: "bg-warning",
  red: "bg-error",
  blue: "bg-info",
  gray: "bg-content-tertiary",
};

export function StatusDot({ color, pulse = false, className }: StatusDotProps) {
  return (
    <span className={cn("relative inline-flex h-2.5 w-2.5", className)}>
      {pulse && (
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            colorMap[color]
          )}
        />
      )}
      <span
        className={cn(
          "relative inline-flex h-2.5 w-2.5 rounded-full",
          colorMap[color]
        )}
      />
    </span>
  );
}
