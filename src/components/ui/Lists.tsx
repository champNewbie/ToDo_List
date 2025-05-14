'use client';
import React from 'react'
import PersonalTag from './PersonalTag'
import WorkTag from './WorkTag'
import {motion} from 'framer-motion'

const Lists = () => {
  return (
    <div>
      <motion.div
      initial = {{scale : 1.0}}
      whileHover={
        {scale: 1.1}}>
          <PersonalTag/>
      </motion.div>

      <motion.div
      initial = {{scale : 1.0}}
      whileHover={
        {scale: 1.1}}>
          <WorkTag />
      </motion.div>
    </div>
  )
}

export default Lists