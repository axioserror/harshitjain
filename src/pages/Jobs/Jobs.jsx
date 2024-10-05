import React from 'react'
import Cards from './Cards'
import Carousel from './Carousel'

const Jobs = () => {
  return (
    <section className='bg-black h-full mt-8 mb-8 text-white' id='jobs'>
       <p className=" ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit text-white">⚪ Wrok Experience</p>
       <div className='flex md:flex-row flex-col justify-around  mt-10 px-6 '>
        <div className='w-1/2 '><h1 className='font-poppins font-normal text-4xl p-4'>Lorem ipsum dolor sit<br/> amet.</h1>
        <p className='font-inconsolata-condensed w-2/3 mt-8 text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus ex veritatis asperiores, laudantium eos at omnis explicabo magni culpa labore, officiis recusandae dignissimos. Fugit saepe veritatis dolore magni corporis odit assumenda ipsam dolorum, quam nostrum qui. Nulla culpa eligendi tenetur, officiis facilis esse perspiciatis rerum, repellat quidem sint at.</p></div>
        <div className='w-1/2'>  <Carousel/></div>
       </div>
    
    </section>
  )
}

export default Jobs
