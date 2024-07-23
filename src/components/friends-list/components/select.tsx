interface Option {
    value: string
    text: string
}

interface SelectProps {
    inputName: string
    inputValue: string | number
    onChangeHandler: (e: string | number) => void
    className: string
    options: Option[] | undefined
}

export function Select({ inputName, inputValue, onChangeHandler, className, options }: SelectProps) {
    return (
        <select className={className} name={inputName} value={inputValue} onChange={(e) => onChangeHandler(e.target.value)}>
            {options?.map(o => (
                <option key={o.value} value={o.value}>{o.text}</option>
            ))}
        </select>
    )
}