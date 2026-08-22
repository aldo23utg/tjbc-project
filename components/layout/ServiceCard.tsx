import * as React from "react"
import { LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string
  icon: LucideIcon
  title: string
  copy: string
}

export function ServiceCard({
  className,
  number,
  icon: Icon,
  title,
  copy,
  ...props
}: ServiceCardProps) {
  return (
    <Card 
      className={cn(
        "anim-layanan group relative p-8 flex flex-col hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300",
        className
      )}
      {...props}
    >
      <Badge
        variant="secondary"
        className="absolute top-6 right-6 font-mono text-xs tabular-nums"
      >
        {number}
      </Badge>

      <CardHeader className="p-0 flex-1 flex flex-col">
        <span className="flex size-14 items-center justify-center rounded-xl bg-primary-container text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="size-6 text-on-primary-container" aria-hidden="true" />
        </span>

        <CardTitle className="mb-3">
          {title}
        </CardTitle>
        <CardDescription className="flex-1 mb-6">
          {copy}
        </CardDescription>
        
        {/* CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-auto"
        >
          Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </CardHeader>
    </Card>
  )
}
