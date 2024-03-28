import { ChevronUpIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { RxDiscordLogo, RxGithubLogo } from 'react-icons/rx'

const Footer = () => {
  return (
        <div className='   mt-[50px] md:mt-[100px] relative w-full h-full bg-transparent text-gray-200 shadow-lg py-[50px]'>
              <div className='h-full w-full flex flex-col items-center justify-center m-auto'>
                   <div className=' flex-wrap w-full h-full flex flex-row items-center justify-around'>
                             <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                                   <div className='font-bold text-[12px] md:text-[16px] '>
                                        Comunnity
                                   </div>    
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                        <FaYoutube/>
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>Youtube</span>
                                      
                                   </p>
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                        <RxGithubLogo/>
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>Github</span>
                                      
                                   </p>
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                        <RxDiscordLogo/>
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>Discord</span>
                                      
                                   </p>
                             </div>

                             <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                                   <div className='font-bold text-[12px] md:text-[16px] '>
                                   Social Media
                                   </div>    
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                        <FaInstagram/>
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>Instagram</span>
                                      
                                   </p>
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                        <FaTwitter/>
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>Twitter</span>
                                      
                                   </p>
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                        <FaLinkedin/>
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>LinkedIn</span>
                                      
                                   </p>
                             </div>

                             <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                                   <div className='font-bold text-[12px] md:text-[16px] '>
                                       About
                                   </div>    
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                       
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>My Portfolio</span>
                                      
                                   </p>
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                       
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>Learn more about me</span>
                                      
                                   </p>
                                   <p className='cursor-pointer my-[15px] flex flex-row items-center'>
                                        
                                       <span className='text-[10px] md:text-[15px] ml-[6px]'>granttsikisayi18@gmail.com</span>
                                      
                                   </p>
                             </div>
                   </div>
                    <div className='mb-[20px] text-[10px] md:text-[15px] text-center'>

                     &copy; 2024 All rights reserved 
                    </div>

              </div>
                        <div className='w-full  justify-end items-end cursor-pointer absolute z-50 flex '>
                            <a href="#navbar"><div className=' w-5 h-5 mr-[50px] md:w-10 md:h-10 '><ChevronUpIcon/></div>  </a> 
                        </div>
        </div>
  )
}

export default Footer