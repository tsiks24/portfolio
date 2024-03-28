import React from 'react'
import ContactForm from '../sub/ContactForm'

const Contact = () => {
  return (
    <section id='contact-me'>
              <div className='text-white justify-center items-center mt-20 md:mt-80 px-20 relative flex flex-col w-full h-full'>


              <div className='text:[10px] md:text-4xl py-4 font-bold text-white'>
                 Lets talk about your 
                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '> Project </span>
              </div>
                   
         <ContactForm/>
              
              </div>
    </section>
  )
}

export default Contact