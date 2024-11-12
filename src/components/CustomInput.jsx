import React from 'react'

const CustomInput = ({hint,type,name,value,onChange,isTextArea=false}) => {
  return (
    <div className={isTextArea?"sm:col-span-2":""}>
        <div className="mt-2.5 relative">
          {isTextArea?(<textarea placeholder={hint} className='bg-[#161616] w-full p-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' name={name} value={value} onChange={onChange} rows={4}>
          </textarea>):(<input type={type} placeholder={hint}
          className='bg-[#161616] w-full p-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'name={name} value={value} onChange={onChange} />)}
        </div>
      </div>
  )
}

export default CustomInput