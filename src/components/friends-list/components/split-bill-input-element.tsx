import { Input } from "./input"
import { Select } from "./select"

interface Option {
    value: string
    text: string
}

interface SplitBillInputElementProps {
    labelText: string
    inputType: string
    inputName: string
    inputValue: string | number
    onChangeHandler: (e: string | number) => void
    disabled?: boolean
    max?: number | string
    options?: Option[]
}

export function SplitBillInputElement({ labelText, inputType, inputName, inputValue, onChangeHandler, disabled, max, options }: SplitBillInputElementProps) {
    return (
        <div className="flex justify-between">
            <label htmlFor="bill">{labelText}</label>
            
            
            {inputType === "select" && (
                <Select 
                    inputName={inputName}
                    inputValue={inputValue}
                    onChangeHandler={onChangeHandler}
                    className="w-28"
                    options={options}
                />
            )}
            {inputType === "number" && (
                <Input 
                    inputName={inputName}
                    inputType={inputType}
                    inputValue={inputValue}
                    onChangeHandler={onChangeHandler}
                    className="w-28"
                    disabled={disabled}
                    max={max}
                />
            )}

        </div>
    )
}