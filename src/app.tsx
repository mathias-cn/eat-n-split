import { FriendsList } from "./components/friends-list";

export function App() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-8 min-w-80 mx-auto p-4">
      <FriendsList />
    </div>
  )
}