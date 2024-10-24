import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="p-4 md:p-3 " onSubmit={handleSubmit}>
      <div className="w-full relative ">
        <input
          type="text"
         className="border text-sm rounded-lg block w-full p-2.5 glassy-effect border-none text-white outline-none"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          disabled={loading}
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center text-white pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
