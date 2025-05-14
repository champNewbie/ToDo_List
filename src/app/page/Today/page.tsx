'use client';
import React, { useState } from 'react'
import Side from '../../components/side'
import {motion} from 'framer-motion'
import { IoAdd } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { Card ,CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'
 
const Today = () => {
  const [clicked , setClicked] = useState(false)
  return (
    <div className='flex justify-start overflow-x-hidden w-full max-w-screen'>
        <Side />
        <motion.div
        initial = {{opacity:0,x : 0}}
        whileInView={{opacity:1,x:20}}
        transition={{ duration: 0.2 }}
        className='mt-4  rounded-xl w-full h-full px-10 py-4'>
          <h1 className='text-5xl font-bold'>Today</h1>
          <Button 
          variant="outline"
          onClick={() => setClicked(!clicked)}
          className='cursor-pointer border-3 w-full h-15 mt-10 px-10 flex justify-start items-center'>
                  <IoAdd className='text-xl font-semibold'/>
                  <h1 className='text-xl font-semibold'>Add new Task</h1>
          </Button>
          {clicked && (
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h1 className='mb-2 ml-1 text-lg font-semibold'>Name</h1>
                    <Input placeholder='Task Name' />
                  </CardTitle>
                  <CardDescription>
                    <h1 className='mb-2 ml-1 text-lg font-semibold'>Card Description</h1>
                    <Textarea placeholder='Enter Description'/>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          )
          }
        
        </motion.div>
          
    </div>
  )
}

export default Today