import React, { useMemo } from 'react';
import image from '../../assets/image.jpg';
const Home = () => {
  // Generate a consistent grid pattern
  const gridItems = useMemo(() => {
    return Array(64).fill(null).map((_, index) => {
      const isBlack = Math.random() < 0.5;
      return (
        <div key={index} className={`${isBlack ? 'bg-black' : 'bg-white'} relative aspect-square opacity-20`}>
          <div className="absolute inset-0 opacity-10">
            {Array(3).fill(null).map((_, i) => (
              <div key={i} className="h-px bg-gray-400 my-2 transform -rotate-45"></div>
            ))}
          </div>
        </div>
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/api/placeholder/1200/800")' }}  // Replace with actual image path when available
      ></div>
      
      {/* Semi-transparent grid overlay */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {gridItems}
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen p-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <h1 className="text-5xl font-bold mb-4">
              The world's best engineers<br />
              need the world's hardest problems
            </h1>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-8 col-start-1 row-start-2"></div>
          <div className="col-span-4 col-start-9 row-start-2 bg-black p-4">
            <p className="mb-4 text-gray-300">
              Our company helps build AI-enabled engineering teams towards solving their 
              most difficult technical and product challenges.
            </p>
            <div className="space-y-2">
              <button className="w-full border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                Work with a team
              </button>
              <button className="w-full border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                Join a team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;