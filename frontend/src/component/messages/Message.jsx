import React from "react";
import { useAuth } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/time";

const Message = ({ message }) => {
  const {user} = useAuth()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === user._id
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? user.dp : selectedConversation.dp
  const bgblue = fromMe ? "bg-blue-500" : ""
  const formatedTime = extractTime(message.createdAt)
  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={profilePic}
            />
          </div>
        </div>
        {/* <div className="chat-header">
          sent
          <time className="text-xs opacity-50">12:46</time>
        </div> */}
        <div className={`chat-bubble text-white ${bgblue}`}>{message.message}</div>
        <div className="chat-footer opacity-50">{formatedTime}</div>
      </div>
    </div>
  );
};

export default Message;
