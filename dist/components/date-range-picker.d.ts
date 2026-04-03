import { DateRange } from 'react-day-picker';
interface DateRangePickerProps {
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    displayFormat?: string;
    /** Number of months to display side-by-side */
    numberOfMonths?: number;
}
declare function DateRangePicker({ value, onChange, placeholder, label, error, helperText, disabled, className, displayFormat, numberOfMonths, }: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace DateRangePicker {
    var displayName: string;
}
export { DateRangePicker };
export type { DateRangePickerProps };
