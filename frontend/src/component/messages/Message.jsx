import React from 'react'

const Message = () => {
  return (
    <div>
      <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1p62-pUiAHRoHIoQLm3VYYUpyL12h1DCNQ&s" />
    </div>
  </div>
  <div className="chat-header">
    reach
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHAJw738s0cLkeTaxyaSQjfIZuNGZuNF6Tdg&s" />
    </div>
  </div>
  <div className="chat-header">
    sent
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
</div>
    </div>
  )
}

export default Message
