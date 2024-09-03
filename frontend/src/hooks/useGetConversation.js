import React, { useEffect, useState } from 'react'

const useGetConversations = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])


  useEffect(() =>{
    const getConversations = async () => {
        setLoading(true)
        try {
            const res = await fetch ('/api/users')
            const data = await res.json()
            console.log('Fetched conversations data:', data); 
            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data)
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    getConversations()

  },[])

  return {loading, conversations}
}

export default useGetConversations
