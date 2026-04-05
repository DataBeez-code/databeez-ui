import * as React from "react";
declare const stepCircleVariants: (props?: ({
    state?: "active" | "completed" | "upcoming" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const stepLabelVariants: (props?: ({
    state?: "active" | "completed" | "upcoming" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const stepConnectorVariants: (props?: ({
    completed?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface StepItem {
    /** Label visibile sotto/accanto al cerchio */
    label: string;
    /** Contenuto personalizzato nel cerchio (sovrascrive numero/check) */
    icon?: React.ReactNode;
}
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Lista degli step */
    steps: (string | StepItem)[];
    /** Indice dello step attivo (0-based) */
    activeStep: number;
    /** Carattere mostrato per gli step completati (default: "✓") */
    completedIcon?: React.ReactNode;
}
declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
export { Stepper, stepCircleVariants, stepLabelVariants, stepConnectorVariants };
