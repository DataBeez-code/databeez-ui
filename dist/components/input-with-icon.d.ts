import { LucideIcon } from 'lucide-react';
import * as React from "react";
export interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: LucideIcon;
    label?: string;
    error?: string;
    helperText?: string;
    rightElement?: React.ReactNode;
}
declare const InputWithIcon: React.ForwardRefExoticComponent<InputWithIconProps & React.RefAttributes<HTMLInputElement>>;
export { InputWithIcon };
