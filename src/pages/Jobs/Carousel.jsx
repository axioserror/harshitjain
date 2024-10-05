import React, { useState, useEffect } from "react";
import Cards from "./Cards";
const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchJobsData = async () => {
      const jobFolders = ['drdo', 'rategain'];
      try {
        const jobs = await Promise.all(
          jobFolders.map(async (folder) => {
            const response = await fetch(`/content/jobs/${folder}/index.md`);
            const text = await response.text();
            
            const lines = text.split('\n').filter(line => line.trim() !== '');
            let job = {
              title: '',
              company: '',
              location: '',
              date: '',
              description: []
            };

            lines.forEach(line => {
              if (line.startsWith('# ')) {
                job.title = line.replace('# ', '');
              } else if (line.startsWith('## ')) {
                job.company = line.replace('## ', '');
              } else if (line.startsWith('### ')) {
                job.location = line.replace('### ', '');
              } else if (line.startsWith('#### ')) {
                job.date = line.replace('#### ', '');
              } else if (line.startsWith('- ')) {
                job.description.push(line.replace('- ', ''));
              }
            });

            return job;
          })
        );
        setJobsData(jobs);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobsData();
  }, []);
  const handlePrev = () => {
    setActiveItem((prev) => (prev === 0 ? jobsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveItem((prev) => (prev === jobsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="indicators-carousel" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg">
        {jobsData.map((job, index) => (
          <div key={index} className={`duration-700 ease-in-out ${activeItem === index ? 'block' : 'hidden'}`}>
            <Cards {...job} />
          </div>
        ))}
      </div>

      {/* Control container */}
      <div className="flex justify-between items-center mt-4">
        {/* Slider indicators */}
        <div className="flex space-x-3">
          {jobsData.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${activeItem === index ? 'bg-white' : 'bg-gray-300'}`}
              aria-current={activeItem === index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveItem(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <div className="flex space-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            onClick={handlePrev}
          >
            <svg
              className="w-4 h-4 text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            onClick={handleNext}
          >
            <svg
              className="w-4 h-4 text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;