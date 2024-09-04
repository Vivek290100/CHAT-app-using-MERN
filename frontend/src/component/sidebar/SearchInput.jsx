import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import useConversation from '../../store/useConversation';
import useGetConversations from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
	const [search, setSearch] =useState("")

	const {setSelectedConversation} = useConversation()
	const {conversations} = useGetConversations()
	console.log("conversationsconversations",conversations);
	

	const handleSubmit = (e) => {
		e.preventDefault()
		if(!search) return
		if(search.length < 3) {
			return toast.error('search valid things')
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

		if(conversation){
			setSelectedConversation(conversation)
			setSearch("")
            // toast.success(`Selected ${conversation.fullname}`)
		}else{
			toast.error('No conversation found with this name')
            // setSearch("")
            // setSelectedConversation(null)
            // return;  // stop the function here to avoid searching for the same name again and again.  If you want to search again, just set the search back to empty string and the conversation back to null.  This will trigger the useEffect hook again and find the conversation again.  This is just a simple optimization to avoid unnecessary searches.  In a real-world application, you might want to implement a debounce or throttle mechanism to avoid unnecessary searches.  But that's a more complex topic.  In this simple example, we are just doing a search on the fly, so this optimization is not necessary.  If you're dealing with a large list of conversations, you might want to implement some kind of search functionality to improve the user experience.  For example, you could use a library like fuzzy-search or algoliasearch to provide a better search
		}
	}
    return (
		<form onSubmit={handleSubmit} 
        className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
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
