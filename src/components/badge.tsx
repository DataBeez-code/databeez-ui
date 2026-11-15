import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-fg hover:bg-primary/80",
                secondary:
                    "border-transparent bg-subtle text-text-base hover:bg-subtle/80",
                destructive:
                    "border-transparent bg-error-bg text-error-fg hover:bg-error-bg/80",
                outline: "text-text-base",
                top: "border-transparent bg-category-top/20 text-category-top",
                base: "border-transparent bg-category-base/20 text-category-base",
                vertical: "border-transparent bg-category-vertical/20 text-category-vertical",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
