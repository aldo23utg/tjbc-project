import * as React from "react"
import { cn } from "@/lib/utils"

const variantClasses: Record<string, string> = {
  default: "bg-primary text-white hover:bg-primary-hover",
  destructive: "bg-error text-white hover:bg-error/90",
  outline: "border border-border bg-background hover:bg-surface text-text-primary",
  secondary: "bg-secondary text-white hover:bg-secondary/80",
  ghost: "hover:bg-surface text-text-primary",
  link: "text-primary underline-offset-4 hover:underline",
}

const sizeClasses: Record<string, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
}

const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

export function buttonVariants({
  variant = "default",
  size = "default",
  className = "",
}: {
  variant?: string
  size?: string
  className?: string
} = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
  size?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
