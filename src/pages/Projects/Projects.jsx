import React from "react";
import Cards from "./Cards";

const Projects = () => {
  return (
    <section className=" bg-black h-max mt-8 text-white" id="projects">
      <p className=" ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit text-white">
        ⚪ Projects
      </p>
      <div className="font-poppins text-xl text-wrap py-8 px-32 flex flex-row w-fit items-center justify-between gap-10  md:gap-0">
        <div>
          <h1 className="text-3xl">Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className="flex flex-row justify-around">
          <p className="font-inconsolata-normal text-xs md:w-1/3 w-24 text-justify  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            soluta eius. Enim ad, similique veritatis cumque iure tempore dicta.
            Labore.
          </p>
        </div>
      </div>
      <div className=" flex flex-row flex-wrap  gap-6 py-8 px-32">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </section>
  );
};

export default Projects;
