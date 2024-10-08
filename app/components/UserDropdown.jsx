import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const UserDropdown = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-white text-black px-4 py-2 rounded-md">
          {selectedUser ? selectedUser.name : "Select a user"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-neutral-200 rounded-md shadow-md p-2">
        {users.map((user) => (
          <DropdownMenuItem
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="cursor-pointer hover:bg-neutral-100 px-4 py-2"
          >
            {user.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;