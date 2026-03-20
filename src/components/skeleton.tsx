import * as React from "react"

import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-subtle", className)}
      {...props}
    />
  )
}

function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  )
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-surface p-6 space-y-4", className)}>
      <Skeleton className="h-5 w-1/3" />
      <SkeletonText lines={3} />
    </div>
  )
}

export { Skeleton, SkeletonText, SkeletonCard }
