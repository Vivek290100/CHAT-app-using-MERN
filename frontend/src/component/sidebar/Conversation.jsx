import React from 'react'
import useConversation from '../../store/useConversation'

const Conversation = ({conversation,lastIdx}) => {
  // console.log("////////////",conversation);
  
  const {selectedConversation, setSelectedConversation} = useConversation()

  // console.log("11111111",selectedConversation.id);
  // console.log("22222222",conversation._id);
  
  const isSelected = selectedConversation?._id === conversation._id
  
  return (
    <>
       <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
        ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
        >
        <div className="avatar online">
          <div className="w-12 rounded-full"
          >
            <img
              src={conversation.dp}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between ">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-x1">3</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  )
}

export default Conversation
