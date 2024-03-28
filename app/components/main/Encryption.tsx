"use client"

import { slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Encryption = () => {
  return (
    
         <div className=' flex flex-row relative items-center justify-center w-full h-full'>
       <div className='absolute w-auto h-auto top-0 z-[5]'>
         <motion.div
         variants={slideInFromTop}
         className='text-sm md:text-[40px] front-medium text-center text-gray-200'
         >
    
            Performance
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '> {""} & {""} </span>
            Security
         </motion.div>
       </div>
    
    <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
            <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                <Image
                src="/LockTop.png"
                alt='Lock top'
                width={50}
                height={50}
                className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] translate-y-5 transition all duration-200 group-hover:translate-y-11'
                />
            </div>

            <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                <Image
                src="/LockMain.png"
                alt='Lock Main'
                width={50}
                height={50}
                className='mt-[13px] md:w-[50px] md:h-[50px] md:mt-0 z-10 w-[20px] h-[20px]'
                />
            </div>
    </div>
   <div className='w-full flex items-start justify-center absolute '>
     <video 
     loop
     muted
     autoPlay
     playsInline
     preload='false'
     className='w-full h-auto '
     src="/encryption.webm">

     </video>
   </div>


    </div>
    
   
  )
}

export default Encryption