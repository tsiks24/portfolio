"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import React from 'react'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
        <motion.div
        variants={slideInFromTop}
         className='Welcome-box py-[15px] px-[8px] border border-[#7042f88b] opacity-[0.9]'
        >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
            <h1 className ='Welcome-text text-[10px] md:text-[13px]'>Javascript Mastery</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='mb-[15px] text-sm md:text-[30px] text-white font-medium mt-[10px] text-center'
        >
       Doing Projects with modern technologies
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive mb-10 text:sm md:text-[20px] text-gray-200 font-medium mt-[10px] text-center'
        >
       Never miss a deadline
        </motion.div>
    </div>
  )
}

export default SkillText