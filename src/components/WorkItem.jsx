import React, { useRef, useState } from 'react';
import { FaPlay,FaPause } from 'react-icons/fa';
const WorkItem = ({ src, link = "/" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-[200px] h-[355px] md:w-[300px] md:h-[533px] rounded-lg overflow-hidden shadow-lg relative group"
        onMouseEnter={() => { if (!isPlaying) videoRef.current.play(); }}
        onMouseLeave={() => { if (isPlaying) videoRef.current.pause(); }}
        onClick={togglePlayPause} // For mobile: toggle play/pause on tap
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
        >
          <source src={src} type="video/mp4" />
        </video>
        
        {/* Mobile-friendly Play/Pause Button */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ display: isPlaying ? 'none' : 'flex' }}
        >
          <button className="p-2 bg-white bg-opacity-70 rounded-full text-gray-700 font-semibold">
            {isPlaying ? <FaPause/> : <FaPlay/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
