'use client';
import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";

const StickyWall = () => {
  return (
    <div className='bg-gray-100 py-2 px-1 mt-2 
        rounded-lg w-[95%] flex justify-between items-center ml-auto'>
        <div className='flex justify-start items-center'>
            <FaNoteSticky className='mx-3'/>
            <h1 className='text-md font-medium'>Sticky Wall</h1>
        </div>
    </div>
  )
}

export default StickyWall