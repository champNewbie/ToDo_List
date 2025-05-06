import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Input } from '@/components/ui/input'
import Dropdown from '@/components/ui/Dropdown';
import Lists from '@/components/ui/Lists';


const side = () => {
  return (
    <div className="h-226 bg-primary w-80 mx-5 my-5 rounded-[5px]">
        <div className='flex justify-between items-center px-5 py-5'>
            <h1 className='font-bold text-3xl'>Menu</h1>
            <RxHamburgerMenu className='font-semibold text-3xl cursor-pointer pt-1'/>
        </div>
        <div className='flex justify-center items-center'>
            <Input placeholder="Search" className='w-71 border-2 font-semibold placeholder:font-semibold focus:border-1'/>
        </div>
        <div className='flex my-6 mx-5 flex-col'>
            <h1 className='text-xl font-semibold'>Task</h1>
            <div>
                <Dropdown />
            </div>
        </div>
        <div className='border-1 rounded-2xl w-[85%] mx-auto border-[#454545]'></div>

        <div className='flex my-6 mx-5 flex-col'>
            <h1 className='text-xl font-semibold'>Task</h1>
            <div>
                <Lists />
            </div>
        </div>
    </div>

  )
}

export default side