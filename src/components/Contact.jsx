import React from 'react'
import CustomInput from './CustomInput'
import { useState } from 'react';
const  base_url = import.meta.env.VITE_API_URL
const Contact = ({ showSnackbar }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
      user_name: '',
      email: '',
      message: '',
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const data={...formData,app_name:"portfolio"}
    setLoading(true);
    showSnackbar('Sending message...', 'loading');
    await fetch(
      `${base_url}message/`,{
        method:'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      }
    ).then((response) => {
    if (!response.ok) {
      setLoading(false);
      showSnackbar('something went wrong')
    }
    return response.json();
  })
  .then((data) => {
    console.log('Success:', data);
    setLoading(false);
    showSnackbar('Your message has been sent successfully!', 'success');
  })
  .catch((error) => {
    setLoading(false);
    showSnackbar('There was a problem', error);
  });

    setFormData({
    user_name: '',
    email: '',
    message: '',
  })
  };
  return (
    <div className='mx-auto max-w-[1200px] bg-black sm:py-20 p-5' id='contact'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 bg-[#161616] rounded-lg'>
          <div className='p-10'>
           <form onSubmit={handleSubmit}
            method='post'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4'>
                <CustomInput type={"text"} hint={"Your Name"}  name={"user_name"} value={formData.user_name} onChange={handleChange}/>
                <CustomInput type={"email"} hint={"Your Email"} name={"email"}value={formData.email} onChange={handleChange}/>
                <CustomInput type={"textarea"} hint={"Your Message"} isTextArea={true} name={"message"} value={formData.message} onChange={handleChange}/>
                <div className='sm:col-span-2'>
                   <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>
                    send
                   </button>
                </div>
            </div>
           </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact