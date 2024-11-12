import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
   const [nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (

      <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center sticky top-0">

        <h1 className='text-3xl font-bold primary-color ml-4'>Philimon Nag</h1>
        <ul className='hidden md:flex'>
          <li className="p-5"><a href='#about'>About</a></li>
          <li className="p-5"><a href='#work'>Work</a></li>
          <li className="p-5"><a href='#contact'>Contact</a></li>
        </ul>
         <div onClick={handleNav} className='block md:hidden mr-6'>
          {nav? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
         </div>
         <div className={nav?'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500':'fixed left-[-100%]'}>
           <h1 className='text-3xl primary-color m-4'>Philimon Nag</h1>
           <ul>
            <li className="p-4"><a href="#about">About</a></li>
            <li className="p-4"><a href="#work">Work</a></li>
            <li className="p-4"><a href="#contact">Contact</a></li>
           </ul>

         </div>
      </div>

  )
}

export default Navbar