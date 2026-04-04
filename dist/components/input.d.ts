import { InputHTMLAttributes } from '../../node_modules/react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}
declare const Input: import('../../node_modules/react').ForwardRefExoticComponent<InputProps & import('../../node_modules/react').RefAttributes<HTMLInputElement>>;
export { Input };
