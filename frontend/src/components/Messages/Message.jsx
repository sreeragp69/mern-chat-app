import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";
import demoPic from "../../assets/demoPic.jpg";
import useGetSingleUser from "../../hooks/useGetSingleUser";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();


 const {singleUser }= useGetSingleUser(selectedConversation?._id)

  const fromMe = message.senderId === authUser._id;

  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic  || singleUser?.profilePic ||  demoPic  ;
  const bubbleBgColor = fromMe ? "bg-[#774072]" : "  bg-[#AF95B1]";

  const shakeClas = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 md:w-7 rounded-full">
          <img alt="Profile" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble px-8 md:px-6 md:text-sm my-2  md:my-1  text-white ${bubbleBgColor} ${shakeClas} rounded-md  relative`}
      >
        <span className="text-[7px] absolute bottom-1 right-2 md:bottom-0 ">
          {formatedTime}
        </span>
        {message.message}
      </div>
    </div>
  );
};

export default Message;
