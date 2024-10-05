import React from 'react'
import drdo from '../../assets/drdo.jpeg'
const Cards = () => {
  const descrip = ['this is descrip', 'this is descrip', 'this is descrip', 'this is descrip']
  
  return (
    <div className='w-fit p-9 border-2  mt-4 rounded-xl border-white bg-black text-white '>
      <div className='border-b-2 py-2 flex flex-row justify-between gap-20 items-center'>
        <div>
          <h1 className='font-poppins text-xl font-medium'>Software Developer Intern</h1>
          <p className='text-black my-2 bg-white w-fit px-2 rounded-sm text-base font-semibold font-inconsolata-wide'>Defence Research and Dev ORg</p>
        </div>
        <div>
          <img src={drdo} alt="company logo" className='h-20 p-2 bg-transparent' />
        </div>
      </div>
      <div>
        <ul className='flex flex-col mt-2 text-sm list-disc px-4'>
          {descrip && descrip.map((item, i) => <li key={i} className='text-wrap font-inconsolata'>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Cards