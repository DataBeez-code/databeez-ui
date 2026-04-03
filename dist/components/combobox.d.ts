interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    /** Allow clearing the selection */
    clearable?: boolean;
}
declare function Combobox({ options, value, onChange, placeholder, searchPlaceholder, emptyMessage, label, error, helperText, disabled, className, clearable, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
declare namespace Combobox {
    var displayName: string;
}
export { Combobox };
export type { ComboboxProps, ComboboxOption };
