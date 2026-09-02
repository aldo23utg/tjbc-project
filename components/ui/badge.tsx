import * as React from "react"
import { cn } from "@/lib/utils"

const variantClasses: Record<string, string> = {
  default: "border-transparent bg-primary text-white hover:bg-primary/80",
  secondary: "border-transparent bg-secondary text-white hover:bg-secondary/80",
  destructive: "border-transparent bg-error text-white hover:bg-error/80",
  outline: "text-text-primary",
}

const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

export function badgeVariants({
  variant = "default",
  className = "",
}: {
  variant?: string
  className?: string
} = {}) {
  return cn(baseClasses, variantClasses[variant], className)
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn(baseClasses, variantClasses[variant], className)} {...props} />
  )
}

export { Badge }
