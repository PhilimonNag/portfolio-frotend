import React, { useEffect, useState } from 'react'
const  base_url = import.meta.env.VITE_API_URL
import ProjectItem from './ProjectItem.jsx';
const Work = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${base_url}project/`);
        
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        
        const data = await response.json();
        // console.log(data)
        setProject(data.data); 
        // console.log(project)
      } catch (error) {
        setError(error.message); 
        console.log(error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProjects();
  }, []);
  if (loading) {
    return <div className='text-gray-400'>Loading...</div>;
  }

  if (error) {
    return <div className='text-gray-400'>Error: {error}</div>;
  }

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
        <p className='text-gray-400'>Check out some of my recent work</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.length > 0 ? (
          project.map((e) => 
            <ProjectItem 
            key={e._id ??""}
            video_url={e.video_url??""} 
            project_url={e.project_url??""}
            name={e.name??""}
            desc={e.desc??""}
           />
            // e.video_url ? (
            //   <WorkItem key={e._id} src={`${base_url}storage/files/${e.video_url}`} />
            // ) : (
            //   <p key={e._id}>No video available</p>
            // )
          )
        ) : (
          <p className='text-w'>No projects found</p>
        )}
      </div>
    </div>
  );
};


export default Work