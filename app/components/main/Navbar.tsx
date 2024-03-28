import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'


const Navbar = () => {
  return (
    <header id='navbar'>
                         <nav  className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10'>
         <nav className='px-[10px] m-auto w-full h-full flex flex-row items-center justify-between'> 
           <a href='about-me'
           className='h-auto w-auto flex flex-row items-center'
           >
         
         <span className='font-bold ml-[10px] hidden md:block text-gray-300 '>
             Grant
         </span>
    
           </a>

           <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                 <div className='text-[10px] md:text-lg w-full h-auto flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                      <a href='#about-me'className='cursor-pointer'>About me</a>
                      <a href='#skills'className='cursor-pointer'> Skills</a>
                      <a href='#project'className='cursor-pointer'>Projects</a>
                 </div>
             </div>
             <div className='flex flex-row gap-5'>
                   {Socials.map((social)=>(
                    <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={24}
                    height={24}
                    className=' w-[15px] h-[15px] md:w-[24px] md:h-[24px]'
                    >

                    </Image>
                   ))}
             </div>
         </nav>
    </nav>
    </header>
    
  )
}

export default Navbar