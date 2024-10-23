import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import demoPic from "../../../assets/demoPic.jpg";

import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../../context/AuthContext";
import useGetSingleUser from "../../../hooks/useGetSingleUser";
import useDeleteUser from "../../../hooks/useDeleteUser";

import Messages from "../Messages";
import MessageInput from "../MessageInput";

const Mc = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      setSelectedConversation({ _id: userId });
    }

    return () => setSelectedConversation(null);
  }, [userId, setSelectedConversation]);

  const { singleUser } = useGetSingleUser(userId);

  const { deleteUser, loading } = useDeleteUser(userId);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      const { loading, dltMessage } = await deleteUser();
      if (!loading) {
        console.log(dltMessage);
        navigate("/");
      }
    }
  };

  
  

return (
  <div className={`w-full md:w-1/2 flex-col h-full flex md:hidden`}>
    {!selectedConversation ? (
      <NotChatSelected />
    ) : (
      <>
        {/* Header */}
        <div className="glassy-effect px-4 py-3 md:px-3 mb-2 flex gap-3 items-center justify-between">
          <Link className="block md:hidden" to={"/"}>
            <IoIosArrowBack className="w-5 h-5 md:w-7 md:h-7" />
          </Link>

          {loading ? (
            <img
              alt="Profile"
              src={demoPic}
              className="w-8 h-8 md:w-7 md:h-7"
            />
          ) : (
            <img
              src={selectedConversation?.profilePic || singleUser?.profilePic || demoPic}
              className="w-8 h-8 md:w-7 rounded-full md:h-7"
              alt="profilePic"
            />
          )}

          <span className="text-white font-medium">
            {singleUser?.fullName || selectedConversation?.fullName}
          </span>

          <div className="ml-auto">
            <CiTrash onClick={handleDelete} />
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-auto">
          <Messages />
          <MessageInput />
        </div>
      </>
    )}
  </div>
);


export default Mc;

const NotChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 md:px-3 text-center sm:text-sm md:text-base text-lg text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-5xl text-center" />
      </div>
    </div>
  );
};
