import { Button } from "./button"

interface PersonProps {
    id: number
    name: string
    balance: number
    pictureUrl: string
    clickHandler: (id: number) => void
    selected: boolean
}

export function Person({ id, name, balance, pictureUrl, clickHandler, selected }: PersonProps) {
    return (
        <div className={`flex items-center justify-between gap-3 hover:bg-orange-100 p-3 ${selected ? "bg-orange-100" : ""}`}>
          <div className="rounded-full w-12 h-12 overflow-hidden">
            <img src={pictureUrl} className="w-full" />
          </div>

          <div className="flex-1 flex flex-col items-start justify-center">
            <p className="font-semibold text-xl">{name}</p>
            {balance === 0 ? (
                <span className="text-sm font-medium">You and {name} are even</span>
            ) : balance < 0 ? (
                <span className="text-sm font-medium text-green-600">{name} owes you ${Math.abs(balance)}</span>
            ) : (
                <span className="text-sm font-medium text-red-600">You owe {name} ${Math.abs(balance)}</span>
            )}
          </div>

          <Button onClick={() => clickHandler(id)}>
            {selected && (
              <p>Close</p>
            )}
            {!selected && (
              <p>Select</p>
            )}
          </Button>
        </div>
    )
}