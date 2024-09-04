import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversation";


const Conversations = () => {
  const {loading,conversations} = useGetConversations()
  // console.log("conversationssssssssssss", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) =>(
        <Conversation key={conversation._id}
        conversation = {conversation}
        lastIdx={index === conversations.length-1}
        />
      ))}
     {loading ? <span className="loading loading-spinner mx-auth"></span> : null}

    </div>
  );
};

export default Conversations;
