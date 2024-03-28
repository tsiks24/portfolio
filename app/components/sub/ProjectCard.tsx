import Image from 'next/image';
import React from 'react'


interface Props {
    src:string;
    title:string;
    description:string;

}

const ProjectCard = ({src,title,description}:Props) => {
  return (
    <div className='border border-[#2a0e61] overflow-hidden rounded-lg shadow-lg  '>
        <Image
        src={src}
        alt={title}
        width={500}
        height={500}
        className='w-full object-contain'
        />

        <div className='relative p-4'>
            <h1 className=' text-[14px] md:text-2xl font-semibold text-white'>{title}</h1>
            <p className='text-[10px] md:text-[20px] mt-2 text-gray-300'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard