interface InputProps {
    inputType: string
    inputName: string
    inputValue: string | number
    onChangeHandler: (e: string | number) => void
    className: string
    disabled?: boolean
    max?: number | string
}

export function Input({ inputType, inputName, inputValue, onChangeHandler, className, disabled, max }: InputProps) {
    
    if(inputType === "number") return (
        <input 
            type={inputType} 
            name={inputName} 
            value={inputValue} 
            onChange={(e) => onChangeHandler(e.target.value)}
            className={className}
            disabled={disabled}
            max={max}
            min={0}
        />
    )
    return (
        <input 
            type={inputType} 
            name={inputName} 
            value={inputValue} 
            onChange={(e) => onChangeHandler(e.target.value)}
            className={className}
            disabled={disabled}
        />
    )
}