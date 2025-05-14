'use client';

import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Today from './today';
import StickyWall from './StickyWall';
import {motion , AnimatePresence } from 'framer-motion'

const Dropdown = () => {
  const [isOpen , setIsOpen] = useState(false)
  const [today , setToday] = useState(false)
  const openHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <button 
      type='button' onClick={openHandler} className='w-full cursor-pointer'>
        <div className='bg-gray-100 py-2 px-1 mt-2 rounded-lg'>
              <div className='flex flex-row justify-start items-center px-3'>
                    <div className={`text-xl transition-transform
                    duration-300 ${ isOpen ? 'rotate-90' : '' }`}>
                        <MdOutlineKeyboardDoubleArrowRight />
                    </div>
                  <h1 className='ml-3 font-bold'>Upcoming</h1>
              </div>
        </div>  
      </button >
      <AnimatePresence >
        {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ease: 'easeOut', duration: 0.2 }}>
          <Today />
          <StickyWall />
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown