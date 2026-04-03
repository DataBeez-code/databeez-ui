import { DayPicker } from 'react-day-picker';
import * as React from "react";
type CalendarProps = React.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    /** date-fns format string */
    displayFormat?: string;
}
declare function DatePicker({ value, onChange, placeholder, label, error, helperText, disabled, className, displayFormat, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace DatePicker {
    var displayName: string;
}
export { Calendar, DatePicker };
export type { CalendarProps, DatePickerProps };
