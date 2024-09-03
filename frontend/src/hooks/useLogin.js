import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {setUser} = useAuth()
    
    const login = async (userName, password) =>{
        const success = handleInputError({
            userName,password
          });
          if(!success)return
        setLoading(true)
        try{
            const res =await fetch('/api/auth/login',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({userName, password}),
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("chat-users", JSON.stringify(data))
            setUser(data)
        }catch(error){
            setLoading(false)
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
    return {loading, login}
}

export default useLogin



function handleInputError({
    userName, password
  }) {
    if (!userName || !password) {
      toast.error("Please enter all required fields");
      return false;
    }
    return true;
  }