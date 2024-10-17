import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ converrsation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === converrsation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(converrsation._id)

  return (
    <>
      <div
        onClick={() => setSelectedConversation(converrsation)}
        className={` flex gap-2 items-center  hover:glass rounded p-2 py-1 cursor-pointer ${
          isSelected ? "glass" : ""
        } `}
      >
        <div className={`avatar ${isOnline ? "online" :""} `}>
          <div className="w-12 rounded-full ">
            <img src={converrsation.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{converrsation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
