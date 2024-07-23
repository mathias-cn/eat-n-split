import { FormEvent, useState } from "react"
import { SplitBillInputElement } from "./split-bill-input-element"
import { Button } from "./button"

interface Friend {
    id: number
    name: string
    pictureUrl: string
    balance: number
}

interface SplitBillFormProps {
    selectedFriend: Friend | null
    changeBalance: (
        ev: FormEvent<HTMLFormElement>,
        bill: string | number,
        yourExpense: string | number,
        friendExpense: string | number,
        whosPaying: string | number,
        selectedFriendId: number
    ) => void
}

export function SplitBillForm({ selectedFriend, changeBalance }: SplitBillFormProps) {
    const [bill, setBill] = useState<string | number>("")
    const [whosPaying, setWhosPaying] = useState<string | number>("you")
    const [yourExpense, setYourExpense] = useState<string | number>("")
    let friendExpense: string | number = ""


    if(Number(bill) && Number(yourExpense)) {
        friendExpense = (Number(bill) - Number(yourExpense))
    }

    return (
        <div className="w-full sm:w-[55%] bg-orange-100 p-6 text-left space-y-2">
            <h2 className="text-xl uppercase">SPLIT A BILL WITH {selectedFriend?.name}</h2>

            <form className="space-y-2" onSubmit={(ev) => changeBalance(ev, bill, yourExpense, friendExpense, whosPaying, selectedFriend?.id ?? 0)}>
                <SplitBillInputElement 
                    labelText="💰 Bill value"
                    inputName="bill"
                    inputType="number"
                    inputValue={bill}
                    onChangeHandler={setBill}
                />
                
                <SplitBillInputElement 
                    labelText="🧑‍🦲 Your expense"
                    inputName="myExpense"
                    inputType="number"
                    inputValue={yourExpense}
                    onChangeHandler={setYourExpense}
                    max={bill}
                />
                
                <SplitBillInputElement 
                    labelText={`🚦 ${selectedFriend?.name}'s expense`}
                    inputName="friendExpense"
                    inputType="number"
                    inputValue={friendExpense}
                    onChangeHandler={setYourExpense}
                    disabled={true}
                />
                
                <SplitBillInputElement 
                    labelText="🤑 Who's paying the bill?"
                    inputName="paying"
                    inputType="select"
                    inputValue={whosPaying}
                    onChangeHandler={setWhosPaying}
                    options={[{value: "you", text: "You"}, {value: "friend", text: `${selectedFriend?.name}`}]}
                />

                <div className="flex justify-end">
                    <Button extraClassname="w-28">
                        Split bill
                    </Button>
                </div>
            </form>
        </div>
    )
}