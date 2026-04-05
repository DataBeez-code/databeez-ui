"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ---------------------------------------------------------------------------
 * Varianti per il cerchio numerato di ogni step
 * --------------------------------------------------------------------------- */
const stepCircleVariants = cva(
  "flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors select-none",
  {
    variants: {
      state: {
        completed: "bg-databeez-primary text-white",
        active: "bg-databeez-primary text-white",
        upcoming: "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400",
      },
    },
    defaultVariants: {
      state: "upcoming",
    },
  }
)

/* ---------------------------------------------------------------------------
 * Varianti per la label dello step
 * --------------------------------------------------------------------------- */
const stepLabelVariants = cva("text-sm transition-colors", {
  variants: {
    state: {
      completed: "text-gray-400 dark:text-gray-500",
      active: "font-medium text-gray-900 dark:text-white",
      upcoming: "text-gray-400 dark:text-gray-500",
    },
  },
  defaultVariants: {
    state: "upcoming",
  },
})

/* ---------------------------------------------------------------------------
 * Varianti per il connettore tra step
 * --------------------------------------------------------------------------- */
const stepConnectorVariants = cva("w-8 h-px transition-colors", {
  variants: {
    completed: {
      true: "bg-databeez-primary",
      false: "bg-gray-200 dark:bg-gray-700",
    },
  },
  defaultVariants: {
    completed: false,
  },
})

/* ---------------------------------------------------------------------------
 * Tipi
 * --------------------------------------------------------------------------- */
export interface StepItem {
  /** Label visibile sotto/accanto al cerchio */
  label: string
  /** Contenuto personalizzato nel cerchio (sovrascrive numero/check) */
  icon?: React.ReactNode
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lista degli step */
  steps: (string | StepItem)[]
  /** Indice dello step attivo (0-based) */
  activeStep: number
  /** Carattere mostrato per gli step completati (default: "✓") */
  completedIcon?: React.ReactNode
}

/* ---------------------------------------------------------------------------
 * Funzione helper per normalizzare step
 * --------------------------------------------------------------------------- */
function normalizeStep(step: string | StepItem): StepItem {
  return typeof step === "string" ? { label: step } : step
}

function getStepState(index: number, activeStep: number) {
  if (index < activeStep) return "completed" as const
  if (index === activeStep) return "active" as const
  return "upcoming" as const
}

/* ---------------------------------------------------------------------------
 * Componente Stepper
 * --------------------------------------------------------------------------- */
const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ className, steps, activeStep, completedIcon = "✓", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center gap-2", className)}
        role="navigation"
        aria-label="Progresso"
        {...props}
      >
        {steps.map((rawStep, i) => {
          const step = normalizeStep(rawStep)
          const state = getStepState(i, activeStep)

          return (
            <div key={step.label} className="flex items-center gap-2">
              {/* Cerchio */}
              <div
                className={cn(stepCircleVariants({ state }))}
                aria-current={state === "active" ? "step" : undefined}
              >
                {step.icon
                  ? step.icon
                  : state === "completed"
                    ? completedIcon
                    : i + 1}
              </div>

              {/* Label */}
              <span className={cn(stepLabelVariants({ state }))}>
                {step.label}
              </span>

              {/* Connettore */}
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    stepConnectorVariants({ completed: i < activeStep })
                  )}
                  aria-hidden="true"
                />
              )}
            </div>
          )
        })}
      </div>
    )
  }
)
Stepper.displayName = "Stepper"

export { Stepper, stepCircleVariants, stepLabelVariants, stepConnectorVariants }
