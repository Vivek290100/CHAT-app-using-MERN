import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
		<form 
        // onSubmit={handleSubmit} 
        className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
				// value={search}
				// onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-black-500 text-white'>
            <BsSearch className='w-5 h-5 outline-none' />

				{/* <IoSearchSharp className='w-6 h-6 outline-none' /> */}
                {/* icon */}
			</button>
		</form>
	);
}

export default SearchInput
