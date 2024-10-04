import React from 'react'
import Cards from './Cards'

const Projects = () => {
  return (
    <div className=' bg-black h-max mt-8 text-white'>
       <p className=" ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit text-white">⚪ Projects</p>
      <div className='font-poppins text-xl text-wrap py-8 px-16 flex flex-row w-fit justify-between'>
     <div><p>Lorem ipsum dolor sit amet consectetur.</p></div>
     <div className='flex flex-row justify-around'><p className='font-inconsolata-normal text-xs w-1/3 text-justify  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, soluta eius. Enim ad, similique veritatis cumque iure tempore dicta. Labore.</p></div>
      </div>
      <div className=' flex flex-row flex-wrap  gap-6 py-8 px-16'>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
    </div>
  )
}

export default Projects
