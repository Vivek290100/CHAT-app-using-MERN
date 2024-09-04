import React, { useState } from 'react'
import useConversation from '../store/useConversation'

const useSendMessage = () => {
  const [loading, setLoading] = useState(false) 
  const {messages, setMessages, selectedConversation} = useConversation()

  const sendMessage = async (message) => {
    console.log("===================",selectedConversation._id);
    setLoading(true)
    try {
        const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        })
         const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        setMessages([...messages, data])
    }catch(error) {
        toastr.error(error.message)
    }finally {
        setLoading(false)
    }
  }
  return {sendMessage, loading}
}

export default useSendMessage
