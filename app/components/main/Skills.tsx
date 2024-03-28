import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillData from '../sub/SkillData'
import SkillText from '../sub/SkillText'

const skills = () => {
  return (
    <section
    style={{transform:"scale(0.9)"}}
    id="skills"
    className='z-20 overflow-hidden  md:py-20 h-full relative flex flex-col items-center justify-center gap-3 pb-10 md:pb-80'>
    
    <SkillText/>
    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
             {Frontend_skill.map((image,index)=>(
                <SkillData
                key={index}
                   src={image.Image}
                   width={image.width}
                  height={image.height}
                  index={index}
                />
             ))}
    </div>

    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
             {Backend_skill.map((image,index)=>(
                <SkillData
                key={index}
                   src={image.Image}
                   width={image.width}
                  height={image.height}
                  index={index}
                />
             ))}
    </div>

    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
             {Full_stack.map((image,index)=>(
                <SkillData
                key={index}
                   src={image.Image}
                   width={image.width}
                  height={image.height}
                  index={index}
                />
             ))}
    </div>

    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
             {Other_skill.map((image,index)=>(
                <SkillData
                key={index}
                   src={image.Image}
                   width={image.width}
                  height={image.height}
                  index={index}
                />
             ))}
    </div>

    <div className='w-full h-full absolute'>
       <div className='flex items-center bg-cover justify-center w-full h-full z-[-10] opacity-30 absolute '>
        <video
        className='w-full h-auto'
        preload='false'
        playsInline
        loop
        muted
        autoPlay
        src="/cards-video.webm"
        >

        </video>
       </div>

    </div>

    </section>
  )
}

export default skills