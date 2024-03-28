import React from 'react'

const ContactForm = () => {
  return (

                <form>
                  <div className='text-[10px] md:text-sm'>
                  <div className='p-2'> 
                        <label htmlFor='name'>
                            Name
                        </label>
                        <div>
                        <input className='w-full p-2 bg-transparent border rounded-2xl border-[#7042f88b]' type='text' id="name" placeholder='grant' ></input>
                        </div>
                    </div>

                    <div className='p-2'> 
                        <label htmlFor='email'>
                            Email
                        </label>
                       <div>
                       <input className='w-full p-2 bg-transparent border rounded-2xl border-[#7042f88b]' type='text' id="email" placeholder='grant@gmail.com' ></input>
                        </div> 
                    </div>

                    <div className='p-2'> 
                        <label htmlFor='message'>
                        Message
                        </label>
                    <div>
                    <textarea className='p-2 bg-transparent border rounded-2xl border-[#7042f88b]' id='message'rows={10} cols={50} placeholder='Type your message here'></textarea>
                    </div>   
                    </div>
                </div>  
                </form>
    
  )
}

export default ContactForm