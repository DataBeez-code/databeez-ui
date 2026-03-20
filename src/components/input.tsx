import { InputHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, id, ...props }, ref) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

        return (
            <div className="space-y-1">
                {label && (
                    <label htmlFor={inputId} className="block text-sm font-medium text-text-base">
                        {label}
                    </label>
                )}
                <input
                    id={inputId}
                    className={clsx(
                        'block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted',
                        error && 'border-red-300 focus:border-red-500 focus:ring-red-500',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-red-600">{error}</p>
                )}
                {helperText && !error && (
                    <p className="text-sm text-text-muted">{helperText}</p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'

export { Input }
