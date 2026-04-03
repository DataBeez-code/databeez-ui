interface TimePickerProps {
    value?: string;
    onChange?: (time: string) => void;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    /** Minute step (default 1) */
    minuteStep?: number;
    /** Allow seconds selection */
    showSeconds?: boolean;
}
declare function TimePicker({ value, onChange, label, error, helperText, disabled, className, minuteStep, showSeconds, }: TimePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace TimePicker {
    var displayName: string;
}
export { TimePicker };
export type { TimePickerProps };
