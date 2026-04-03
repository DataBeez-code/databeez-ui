declare const DEFAULT_PRESETS: string[];
interface ColorPickerProps {
    value?: string;
    onChange?: (color: string) => void;
    presets?: string[];
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
}
declare function ColorPicker({ value, onChange, presets, label, error, helperText, disabled, className, }: ColorPickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace ColorPicker {
    var displayName: string;
}
export { ColorPicker, DEFAULT_PRESETS };
export type { ColorPickerProps };
