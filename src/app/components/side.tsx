'use client';
import {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Input } from '@/components/ui/input'
import Dropdown from '@/components/ui/Dropdown';
import Lists from '@/components/ui/Lists';

import { RiListSettingsLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import {motion , AnimatePresence} from 'framer-motion'

const side = () => {
  const [toggle , setToggle] = useState(false)
  const toggleHandle = () => {
    setToggle(!toggle)
  }
  return (
    <div>
        <AnimatePresence mode='wait'>
            {
                !toggle ?(
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}

                className='flex justify-between items-center px-5 py-5 mt-3'>           
                    <RxHamburgerMenu
                    onClick = {() => setToggle(!toggle)}
                    className='font-semibold text-3xl cursor-pointer pt-1'/>
                </motion.div>)
            :(
                <motion.div 
                key="sidebar"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-226 bg-[#e7e7e7] w-80 mx-5 my-5 rounded-[5px] flex flex-col justify-between">
                    <div>
                        <div className='flex justify-between items-center px-5 py-5'>
                            <h1 className='font-bold text-3xl'>TDL</h1>
                            <RxHamburgerMenu 
                            onClick = {() => setToggle(!toggle)}
                            className='font-semibold text-3xl cursor-pointer pt-1'/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Input placeholder="Search" className='w-71 border-2 font-semibold placeholder:font-semibold focus:border-1'/>
                        </div>
                        <div className='flex my-6 mx-5 flex-col'>
                            <div className='flex justify-between items-center mx-1'>
                                <h1 className='text-xl font-semibold'>Tasks</h1>
                            </div>
                            <div>
                                <Dropdown />
                            </div>
                        </div>
                        {/* <div className='border-1 rounded-2xl w-[85%] mx-auto border-[#454545]'></div> */}

                        <div className='flex my-6 mx-5 flex-col'>
                            <div className='flex justify-between items-center mx-1'>
                                <h1 className='text-xl font-semibold'>Lists</h1>
                                <button className='bg-gray-300 px-2 py-1 rounded-md cursor-pointer'>
                                    <FaPlus className='text-sm'/>
                                </button>
                            </div>
                            <div>
                                <Lists />
                            </div>
                        </div>
                        {/* <div className='border-1 rounded-2xl w-[85%] mx-auto border-[#454545]'></div> */}
                    </div>

                    <div className='mb-8 mx-5'>
                        <div className='flex justify-start items-center text-lg cursor-pointer' >
                            <RiListSettingsLine className='text-xl'/>
                            <button>
                                <h1 className='ml-3 text-lg font-semibold cursor-pointer'>Settings</h1>
                            </button>
                        </div>
                        <div className=' mt-3 flex justify-start items-center text-lg cursor-pointer'>
                            <CiLogout className='text-xl'/>
                            <button>
                                <h1 className='ml-3 font-semibold cursor-pointer'>Log Out</h1>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    // {toggle? (<div className='flex justify-between items-center px-5 py-5'>
    //     <h1 className='font-bold text-3xl'>TDL</h1>
    //     <RxHamburgerMenu className='font-semibold text-3xl cursor-pointer pt-1'/>
    // </div>):
    //     <div className="h-226 bg-[#e7e7e7] w-80 mx-5 my-5 rounded-[5px] flex flex-col justify-between">
        
    // </div>
    // }

  )
}

export default side