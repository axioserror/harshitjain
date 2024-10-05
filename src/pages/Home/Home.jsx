import React from 'react';
import image from '../../assets/image.jpg';
import resumePDF from '../../assets/resumehj.pdf'; // Assuming you have a resume PDF in this location

const Home = () => {
  // Manually specify the background styles
  const backgroundStyles = [
    'bg-black',
    'bg-black',
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-transparent',
    'bg-black',
    'bg-black',
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-transparent',
    'bg-black',
    'bg-white',
  ];

  // Generate grid items with fixed backgrounds
  const gridItems = backgroundStyles.map((style, index) => (
    <div key={index} className={`${style} relative`}>
      {/* Add subtle line effect */}
      <div className="absolute inset-0 opacity-20 border-b border-gray-500"></div>
    </div>
  ));

  return (
    <section  
      id='home' 
      className="relative min-h-screen text-white overflow-hidden mt-24" 
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-4">
        {gridItems}
      </div>
       
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen p-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 z-30 bg-black p-8">
            <h1 className="text-5xl font-bold font-poppins mb-4 mt-8 w-fit">
              The world's best engineers<br />
              need the world's hardest problems
            </h1>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-8 col-start-1 row-start-2"></div>
          <div className="col-span-4 col-start-9 row-start-2 bg-black p-8">
            <p className="mb-4 text-white bg-black font-inconsolata">
              Our company helps build AI-enabled engineering teams towards solving their 
              most difficult technical and product challenges.
            </p>
            <div className="space-y-2 flex flex-row gap-4">
              
              <button className=' w-2/3 border border-white px-4 mx-10 py-2 hover:bg-white hover:text-black transition-colors text-center'>
              <a 
                href={resumePDF} 
                target="_blank" 
                rel="noopener noreferrer" 
                
              >
               Checkout my Resume
              </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;