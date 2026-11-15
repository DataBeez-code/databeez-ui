interface MultiSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface MultiSelectProps {
    options: MultiSelectOption[];
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    /** Mostra i pulsanti «Seleziona tutto» / «Deseleziona» sopra la lista (agiscono sui risultati filtrati). */
    showBulkActions?: boolean;
    selectAllLabel?: string;
    clearLabel?: string;
    /** Quanti nomi mostrare nel trigger prima di passare a «+N» (default 2). Con 0 mostra sempre il riepilogo numerico. */
    maxVisibleLabels?: number;
    /** Riepilogo numerico usato quando `maxVisibleLabels` e' 0. */
    summaryLabel?: (count: number) => string;
}
declare function MultiSelect({ options, value, onChange, placeholder, searchPlaceholder, emptyMessage, label, error, helperText, disabled, className, showBulkActions, selectAllLabel, clearLabel, maxVisibleLabels, summaryLabel, }: MultiSelectProps): import("react/jsx-runtime").JSX.Element;
declare namespace MultiSelect {
    var displayName: string;
}
export { MultiSelect };
export type { MultiSelectProps, MultiSelectOption };
