import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r w-full  border-slate-500 p-5  md:p-6 lg:p-10  flex md:w-1/2  flex-col ">
      <h1 className="font-bold md:p-2 pb-3 text-lg md:text-xl">Chats</h1>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
