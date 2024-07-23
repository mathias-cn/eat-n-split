import { Input } from "./input"

interface AddFriendInputElementProps {
    labelText: string
    inputType: string
    inputName: string
    inputValue: string
    onChangeHandler: (e: string) => void
}

export function AddFriendInputElement({ labelText, inputName, inputType, inputValue, onChangeHandler }: AddFriendInputElementProps) {
    return (
        <div className="flex flex-wrap gap-3 items-center justify-between">
            <label htmlFor="name">{labelText}</label>
            <Input 
                inputName={inputName}
                inputType={inputType}
                inputValue={inputValue}
                onChangeHandler={onChangeHandler}
                className="w-28"
            />
        </div>
    )
}