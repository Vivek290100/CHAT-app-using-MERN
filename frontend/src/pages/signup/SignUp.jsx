import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

function Signup() {
  const [input, setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const {loading,signUp} = useSignUp()

  const handekCheckboxChange = (gender) => {
    setInputs({...input, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Make API call to sign up user
    await signUp(input)
    console.log("input",input)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto' >
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop bg-opacity-20 border -2 shadow-slate-300'>
      <h2 className='text-3xl font-bold mb-4 text-blue-800'>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='name'>
            FullName
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='name'
            type='text'
            // placeholder='FullName'
            value={input.fullName}
            onChange={(e) => setInputs({...input, fullName: e.target.value})}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='username'>
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='username'
            type='text'
            // placeholder='Username'
            value={input.userName}
            onChange={(e) => setInputs({...input, userName: e.target.value})}
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
            // placeholder='******************'
            value={input.password}
            onChange={(e) => setInputs({...input, password: e.target.value})}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='confirm-password'>
            Confirm Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-200  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='confirm-password'
            type='password'
            // placeholder='******************'
            value={input.confirmPassword}
            onChange={(e) => setInputs({...input, confirmPassword: e.target.value})}
          />
        </div>

        <GenderCheckbox onCheckboxChange = {handekCheckboxChange} selectedGender = {input.gender}/>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
            type='submit'
          >
            Sign up
          </button>
          <Link
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 transition duration-300 ease-in-out'
            to='/login'
          >
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
