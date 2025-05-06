'use client';
import React ,{useState} from 'react'
import { FaListCheck } from "react-icons/fa6";

const today = () => {
  const [count , setCount] = useState(0)
  const increment = () => {
    setCount(count => count += 1)
  }
  return (
    <div className='bg-gray-100 py-2 px-1 mt-2 
    rounded-lg w-[95%] flex justify-between items-center ml-auto'>
        <div className='flex justify-start items-center'>
            <FaListCheck className='mx-3'/>
            <h1 className='text-md font-medium'>Today</h1>
        </div>
        <button onClick={increment} className='flex bg-[#e8aa89] rounded-md px-1 cursor-pointer'>
            <h2 className='px-1 font-bold'>{count}</h2>
        </button>
    </div>
  )
}

export default today