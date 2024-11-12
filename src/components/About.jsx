import React from 'react'
import profile from "../assets/images/profile.png"

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className='mt-4 md:mt-0 text-left'>
        <div className='my-auto mx-6'>
          <h2 className='text-4xl font-bold md-4 primary-color'>
            About Me
          </h2>
          <p className='text-base lg:text-lg mt-5 leading-relaxed tracking-widest text-gray-400'>
          I’m an Associate Software Developer at Appstone Remote, contributing to an ESG product using FastAPI and Celery. I specialize in backend development with Node.js, NestJS, GraphQL, MongoDB, PostgreSQL, Elasticsearch, and RabbitMQ. I’ve worked on AWS S3 for file storage and Razorpay for payment integration. On the frontend, I have experience with Kotlin for Android and Flutter for cross-platform development. I’m passionate about AI and Generative AI, using Langchain and OpenAI’s API to create intelligent systems.
          </p>
         </div>
        </div>
        <img src={profile} alt="" className='mx-auto rounded-3xl py-8 md:py-0' width={300}/>
      </div>
    </div>
  )
}

export default About