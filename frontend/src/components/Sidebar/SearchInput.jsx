import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return


    if (search.length <3) {
     return  toast.error("search term must be at least 3 charecters long")
    }


    const conversation =conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))

    if (conversation) {
      setSelectedConversation(conversation)
      setSearch("")
    }else{
      toast.error("No such user found")
    }

  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        className="input input-ghost border-gray-400 rounded-full"
        placeholder="Search.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="btn  btn-circle btn-ghost hover:glass hover:text-gray-300 border-gray-400"
        type="submit"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
