import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const side = () => {
  return (
    <div className="h-226 bg-gray-200 w-80 mx-5 my-5 rounded-[5px]">
        <div className='flex justify-between items-center px-7 py-5'>
            <h1 className='font-bold text-3xl text-primary'>Menu</h1>
            <RxHamburgerMenu className='text-2xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default side