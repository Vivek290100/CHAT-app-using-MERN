import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function Signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto' >
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop bg-opacity-20'>
      <h2 className='text-3xl font-bold mb-4 text-blue-800'>Sign up</h2>
      <form>
        <div className='mb-4'>
          <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='name'
            type='text'
            placeholder='Name'
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
            placeholder='Username'
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
            placeholder='******************'
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
            placeholder='******************'
          />
        </div>

        <GenderCheckbox/>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
            type='button'
          >
            Sign up
          </button>
          <a
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 transition duration-300 ease-in-out'
            href='#'
          >
            Already have an account? Login
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
