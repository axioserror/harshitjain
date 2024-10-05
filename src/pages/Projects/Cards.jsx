import React from "react";

const Cards = ({ title, techstack, description, githubUrl  }) => {

  return (
    <div className="border-2 text-white bg-black min-w-96 md:max-w-md border-white rounded-lg  p-5 ">
      <div className="border-b-2 py-4 flex flex-col justify-start ">
        <div className="font-poppins text-2xl font-light">
        
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"           >
          {title}
          </a>
        )}</div>
        <div>
          <ul className="  text-black  flex gap-2 flex-row text-justify mt-2 flex-wrap justify-start ">
          {techstack &&
              techstack.map((tech, i) => (
                <li key={i} className="bg-white rounded-md p-1 text-sm">
                  {tech}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="w-full ">
        <p className="border-2  border-white rounded-lg p-2 mt-2 ">
        {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
