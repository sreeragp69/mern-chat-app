import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { useNavigate } from "react-router-dom";
import useGetMessages from "../../hooks/useGetMessages";
import demoPic from '../../assets/demoPic.jpg'

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const navigate = useNavigate();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const handleClick = () => {
    setSelectedConversation(conversation);
    if (window.innerWidth <= 767) {
      navigate(`/messages/${conversation._id}`);
    }
  };

  const { loading } = useGetMessages();

  return (
    <>
      <div
        onClick={handleClick}
        className={` flex gap-2 items-center  hover:glass rounded p-2 py-2 cursor-pointer ${
          isSelected ? "glass" : ""
        } `}
      >
        <div className={`avatar ${isOnline ? "online" : ""} `}>
          <div className="w-10  lg:w-12  md:w-10 rounded-full ">
            {loading ? (
              <img alt="Profile" src={demoPic} />
            ) : (
              <img src={conversation.profilePic} />
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
