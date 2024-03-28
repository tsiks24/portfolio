import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
  return (
    <section id='project'>
          <div className=' md:mt-[180px] py-20 flex flex-col items-center justify-self-center'>
        <h1 className=' text-[14px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
           My Projects
        </h1>
           <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10  '>
               <ProjectCard
               src="/bv.png"
               title="Biometric Voting System"
               description="IOT based voting system"
               />
               <ProjectCard
               src="/wanaden.png"
               title="Wanaden"
               description="Accomodation application"
               />
               <ProjectCard
               src="/job.png"
               title="ZimJobsConnect"
               description="Job advertising website"
               />
           </div>
           
    </div>
    </section>
    
  )
}

export default Project