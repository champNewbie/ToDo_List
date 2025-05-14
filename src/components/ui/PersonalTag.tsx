'use client';
import React from 'react'

const PersonalTag = () => {
  return (
    <div className='bg-gray-100 py-2 px-1 mt-2 rounded-lg flex justify-between items-center'>
        <div className='flex flex-row justify-start items-center px-3'>
            <div className='w-5 h-5 rounded-sm bg-red-400'></div>
            <h1 className='ml-3 font-bold'>Personal</h1>
        </div>
        <div className='w-5 h-5 rounded-sm bg-gray-300 flex justify-center items-center mr-2'>
            <h1 className='text-md font-bold'>2</h1>
        </div>
    </div>  
  )
}

export default PersonalTag