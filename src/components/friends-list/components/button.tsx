import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode
    extraClassname?: string
}

export function Button({ children, extraClassname, ...props }: ButtonProps) {
    return (
        <button {...props} className={`bg-orange-400 px-3 py-1 rounded-lg font-semibold ${extraClassname}`}>
            {children}
        </button>
    )
}