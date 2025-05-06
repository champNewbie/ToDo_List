'use client';

import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Today from './today';
import StickyWall from './StickyWall';

const Dropdown = () => {
  const [isOpen , setIsOpen] = useState(false)
  const openHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <button type='button' onClick={openHandler} className='w-full'>
        <div className='bg-gray-100 py-2 px-1 mt-2 rounded-lg'>
              <div className='flex flex-row justify-start items-center px-3'>
                    <div className={`text-xl transition-transform
                    duration-300 ${ isOpen ? 'rotate-90' : '' }`}>
                        <MdOutlineKeyboardDoubleArrowRight />
                    </div>
                  <h1 className='ml-3 font-bold'>Upcoming</h1>
              </div>
        </div>  
      </button>
      <div className={`transition-all duration-300 ${
    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        {isOpen && 
        <div>
          <Today/>
          <StickyWall />
        </div>
        }
      </div>
    </div>
  )
}

export default Dropdown