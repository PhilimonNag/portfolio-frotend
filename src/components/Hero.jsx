import React from 'react'
import profileImage from '../assets/images/profile.png'
import { TypeAnimation } from 'react-type-animation'
import resume from "../assets/pdf/philimon_nag_resume.pdf"

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
      <div className="col-span-1 my-auto mx-auto w-[250px] h-auto lg:w-[400px]">
        <img src={profileImage} alt="Hero Image" />
      </div> 
      <div className="col-span-2 px-5">
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            I' m a
          </span>
          <br />
          <TypeAnimation
           sequence={[
            "Backed Dev",
            1000,
            "Frontend Dev",
            1000,
            "UI/UX",
            1000,
           ]}
           wrapper='span'
           speed={50}
           repeat={Infinity}
          />
        </h1>
        <p className='text-white sm:text-lg my-6 lg:text-xl'>
           My name is Philimon Nag and I have 2+ years experience in fullstack web and app development.
        </p>
        <div className="my-8">
          <a href={resume} download="philimon_nag_resume.pdf" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
          Download CV</a>
          <a href="#contact" className='
          px-6 py-3 w-full rounded-xl mr-4 
          border border-gray-400
          hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero