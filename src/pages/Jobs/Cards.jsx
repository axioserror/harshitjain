import React from 'react';

const Cards = ({ title, company,location,date, description }) => {
  return (
    <div className='w-fit p-9 border-2 mt-4 rounded-xl border-white bg-black text-white'>
      <div className='border-b-2 py-2 flex flex-row justify-between gap-20 items-center'>
        <div>
          <h1 className='font-poppins text-xl font-medium'>{title}</h1>
          <p className='text-black my-2 bg-white w-fit px-2 rounded-sm text-base font-semibold font-inconsolata-wide'>{company}</p>
        </div>
        <div className='flex flex-col items-start gap-2 p-2 justify-start'>
          <p className='bg-white text-black p-1 rounded-md font-inconsolata-condensed font-medium'>{location}</p>
          <p>{date}</p>
        </div>
      </div>
      <div>
        <ul className='flex flex-col mt-2 text-sm list-disc px-4'>
          {description && description.map((item, i) => <li key={i} className='text-wrap w-4/5 font-inconsolata'>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Cards;