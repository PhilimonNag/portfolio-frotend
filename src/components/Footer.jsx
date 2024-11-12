import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='mx-auto max-w-[1200px] bg-black px-4 py-5 text-center'>
      <div className='grid grid-cols-1 md:flex md:justify-between gap-2'>
        <h2 className='primary-color text-xl'>Philimom Nag</h2>
        <div className='flex flex-col gap-3 text-gray-400'>
         <p >Social Links</p> 
          <div className='flex gap-4 justify-center'>
              <a href='https://www.facebook.com/philimon.nag' target='_blank' rel='noopener noreferrer'>
                  <FaFacebook size={24} />
              </a>
              <a href='https://www.instagram.com/philimon_nag/' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram size={24} />
              </a>
              <a href='https://www.linkedin.com/in/philimonnag' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedinIn size={24} />
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer