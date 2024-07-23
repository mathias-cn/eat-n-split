import { FormEvent, useState } from "react";
import { Button } from "./button";
import { AddFriendInputElement } from "./add-friend-input-element";

interface AddFriendFormProps {
    randomUrl: string
    addFriendHandler: (ev: FormEvent<HTMLFormElement>,name: string, pictureUrl: string) => void
}

export function AddFriendForm({ randomUrl, addFriendHandler }: AddFriendFormProps) {
    const [newFriendName, setNewFriendName] = useState<string | number>("")
    const [newFriendImageUrl, setNewFriendImageUrl] = useState<string | number>(randomUrl)

    return (
        <form onSubmit={(ev) => addFriendHandler(ev, newFriendName.toString(), newFriendImageUrl.toString())} className="bg-orange-100 rounded-lg p-4 space-y-3 mt-3">
            <AddFriendInputElement 
                labelText="🙋Friend name"
                inputName="name"
                inputType="text"
                inputValue={newFriendName.toString()}
                onChangeHandler={setNewFriendName}
            />
            
            <AddFriendInputElement 
                labelText="📸Image URL"
                inputName="imageUrl"
                inputType="text"
                inputValue={newFriendImageUrl.toString()}
                onChangeHandler={setNewFriendImageUrl}
            />

            <Button extraClassname="w-1/2">
                Add
            </Button>
        </form>
    )
}