import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations &&
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            converrsation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))}

      {loading ? (
        <span className="loading-spinner loading mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;