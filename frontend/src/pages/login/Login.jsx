import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password,setPassword] =useState("")

  const {loading, login} = useLogin()
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
  <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop bg-opacity-20 border-separate border -2 shadow-slate-300'>
    <h2 className='text-3xl font-bold mb-4 text-blue-800'>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='username'>
          Username
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
          id='username'
          type='text'
          value = {username}
          onChange={(e)=> setUsername(e.target.value)}
          // placeholder='Username'
        />
      </div>
      <div className='mb-6'>
        <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='password'>
          Password
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
          id='password'
          type='password'
          value = {password}
          onChange={(e)=> setPassword(e.target.value)}
          // placeholder='******************'
        />
      </div>
      <div className='flex items-center justify-between'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
          type='submit'
          disabled={loading}
        >
          {loading ? <span className='loading loading-spinner'></span>: "Login"}
        </button>
        <Link
          className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 transition duration-300 ease-in-out'
          to='/signup'
        >
          Don't have an account? Sign up
        </Link>
      </div>
    </form>
  </div>
</div>

  )
}

export default Login
