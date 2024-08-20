import React from 'react'
import Conversations from './Conversations'

const Conversation = () => {
  return (
    <>
       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9pkOqYvRLDdfxJ-3g7uyWOj_xbfNUVl8hQ&s"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between ">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-x1"></span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  )
}

export default Conversation
