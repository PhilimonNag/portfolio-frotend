import React from 'react'

const ProjectItem = ({name,desc,project_url,video_url}) => {
  return (
    <div className='
    overflow-hidden shadow-lg
    text-white 
    rounded-md p-7 
    border-2 border-md
  border-orange-500 gap-2'>
      <p className='text-xl'>{name}</p>
      <p className='text-base text-gray-400 mt-3'>{desc}</p>
      <a href={project_url} target='_blank' rel='noopener noreferrer'>view</a>
      {/* <p>{project_url}</p>
      <p>{video_url}</p> */}
    </div>
  )
}

export default ProjectItem