import React from 'react'
import {FaPython,FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTailwindcss,SiFlutter,SiNestjs, SiFastapi, SiGraphql, SiMongodb, SiExpress} from 'react-icons/si'


const Skills = () => {

return (
    <div className='border border-gray-600
     bg-black text-gray-400
     md:h-[150px] max-w-[1200px] mx-auto 
     grid grid-cols-4 place-items-center 
     md:flex md:justify-between md:items-center'>
        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
          My <br />Tech <br />Stack
        </h2>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <SiFlutter size={36}/>
      <p className='mt-2'>Flutter</p>
    </div>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <SiTailwindcss size={36}/>
      <p className='mt-2'>Tailwind</p>
    </div>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <FaReact size={36}/>
      <p className='mt-2'>React</p>
    </div>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <SiExpress size={36}/>
      <p className='mt-2'>Express</p>
    </div>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <SiMongodb size={36}/>
      <p className='mt-2'>MongoDb</p>
    </div>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
     
      <FaNodeJs size={36}/>
      <p className='mt-2'>NodeJs</p>
    </div>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <SiGraphql size={36}/>
      <p className='mt-2'>Graphql</p>
    </div>
    
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <SiNestjs size={36}/>
      <p className='mt-2'>NestJs</p>
    </div>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <FaPython size={36}/>
      <p className='mt-2'>Python</p>
    </div>
    <div className='flex flex-col  items-center m-4 sm:my-0 w:[80px] md:w-[100px]'>
      <SiFastapi size={36}/>
      <p className='mt-2'>Fastapi</p>
    </div>

    
    
    



      
       

    </div>


  )
}

export default Skills