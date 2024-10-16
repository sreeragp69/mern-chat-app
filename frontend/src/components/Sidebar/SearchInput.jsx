import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input
        type="text"
        className="input input-ghost border-gray-400 rounded-full"
        placeholder="Search.."
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
