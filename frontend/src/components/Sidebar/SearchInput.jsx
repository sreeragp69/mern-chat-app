import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    if (search.length < 3) {
      return toast.error("search term must be at least 3 charecters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center "
    >
      <input
        type="text"
        className=" border-r-0 rounded-r-none  text-xs  h-8 md:h-10 lg:h-13 transparent-input"
        placeholder="Search.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="search-btn h-8 md:h-10 lg:h-13  py-0"
        type="submit"
      >
        <IoSearchSharp className="w-4 h-4  md:w-5 md:h-5 lg:w-6 lg:h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
