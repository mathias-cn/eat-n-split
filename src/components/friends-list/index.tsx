import { FormEvent, useState } from "react";
import { AddFriendForm } from "./components/add-friend-form";
import { Button } from "./components/button";
import { Person } from "./components/person";
import { SplitBillForm } from "./components/split-bill-form";

interface Friend {
    id: number
    name: string
    pictureUrl: string
    balance: number
}

export function FriendsList() {
    const [isAddFriendFormOpened, setIsAddFriendFormOpened] = useState(false)
    const [isSplitBillFormOpened, setIsSplitBillFormOpened] = useState(false)
    const [selectedFriend, setSelectedFriend] = useState<null | Friend>(null)
    const [friendsList, setFriendsList] = useState<Friend[]>([])

    function changeBalance(
        ev: FormEvent<HTMLFormElement>,
        bill: string | number,
        yourExpense: string | number,
        friendExpense: string | number,
        whosPaying: string | number,
        selectedFriendId: number | null
    ) {
        ev.preventDefault()
        
        if(!bill) return
        if(!yourExpense) return
        if(!friendExpense) return
        if(!selectedFriendId || selectedFriendId === 0) return

        if(whosPaying === "you") {
            setFriendsList(friendsList => (
                friendsList.map(f => (
                    f.id === selectedFriendId 
                    ? {...f, balance: f.balance - Number(friendExpense)}
                    : f
                ))
            ))
        } else {
            setFriendsList(friendsList => (
                friendsList.map(f => (
                    f.id === selectedFriendId 
                    ? {...f, balance: f.balance + Number(yourExpense)}
                    : f
                ))
            ))

        }

        setSelectedFriend(null)
        setIsSplitBillFormOpened(false)
    }

    function openAddFriendForm() {
      setIsAddFriendFormOpened(true)
    }
    function closeAddFriendForm() {
      setIsAddFriendFormOpened(false)
    }
    function openSplitBillForm(id: number) {
      if(!friendsList.map(f => f.id).includes(id)) return

      setIsSplitBillFormOpened(true)
      setSelectedFriend(friendsList.filter(f => f.id === id)[0])
    }
    function closeSplitBillForm() {
      setSelectedFriend(null)
      setIsSplitBillFormOpened(false)
    }
    
    function addFriendToList(ev: FormEvent<HTMLFormElement>,name: string, pictureUrl: string) {
        ev.preventDefault()

        if(!name) return
        if(!pictureUrl) return

        setFriendsList(friendsList => [...friendsList, {
            id: Date.now(),
            name,
            pictureUrl,
            balance: 0
        }])

        setIsAddFriendFormOpened(false)
    }

    return (
        <>
        <div className="w-full sm:w-2/5 text-right">
            {friendsList.length === 0 && (
                <p className="text-left">You have no friends in your list</p>
            )}
            {friendsList.length > 0 && (
                friendsList.map(f => (
                    f.id === selectedFriend?.id ? (
                        <Person 
                            id={f.id}
                            name={f.name}
                            balance={f.balance}
                            pictureUrl={f.pictureUrl}
                            key={f.id}
                            clickHandler={closeSplitBillForm}
                            selected={true}
                        />
                    ) : (
                        <Person 
                            id={f.id}
                            name={f.name}
                            balance={f.balance}
                            pictureUrl={f.pictureUrl}
                            key={f.id}
                            clickHandler={openSplitBillForm}
                            selected={false}
                        />
                    )
                ))
            )}

            {isAddFriendFormOpened && (
            <AddFriendForm 
                randomUrl={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`}
                addFriendHandler={addFriendToList}
            />
            )}

            <div className="w-full flex p-3 justify-end">
            {isAddFriendFormOpened ? (
                <Button onClick={closeAddFriendForm}>
                <p>Close</p>
                </Button>
                ) : (
                <Button onClick={openAddFriendForm}>
                <p>Add friend</p>
                </Button>
            )}
            </div>
        </div>
        {isSplitBillFormOpened && (
            <SplitBillForm 
                selectedFriend={selectedFriend}
                changeBalance={changeBalance}
            />
        )}
        </>
    )
}