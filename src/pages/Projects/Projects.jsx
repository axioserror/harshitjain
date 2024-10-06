import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import ReactMarkdown from "react-markdown";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    const fetchProjectsData = async () => {
      const projectFolders = ["ExpenseTracker", "FAQChatbot", "StockMarket"];
      try {
        const projects = await Promise.all(
          projectFolders.map(async (folder) => {
            const response = await fetch(`/content/ProjectsFile/${folder}/index.md`);
            const text = await response.text();
            const lines = text.split("\n").filter((line) => line.trim() !== "");
            let project = {
              title: "",
              techstack: [],
              description: [],
              githubUrl: "",
            };
            lines.forEach((line) => {
              if (line.startsWith("# ")) {
                project.title = line.replace("# ", "");
              } else if (line.startsWith("## Tech Stack")) {
                // Assume the next line contains the tech stack
                const techLine = lines[lines.indexOf(line) + 1];
                project.techstack = techLine.replace("- ", "").split(", ");
              } else if (line.startsWith("## Description")) {
                // Collect all subsequent lines starting with "-" as description
                let i = lines.indexOf(line) + 1;
                while (i < lines.length && lines[i].startsWith("- ")) {
                  project.description.push(lines[i].replace("- ", ""));
                  i++;
                }
              }else if (line.startsWith("## GitHub URL")) {
                // Extract the GitHub URL
                const githubLine = lines[lines.indexOf(line) + 1];
                project.githubUrl = githubLine.replace("- ", "").trim();
              }
            });
            return project;
          })
        );
        setProjectsData(projects);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectsData();
  }, []);
  return (
    <section className=" bg-black h-max mt-8 text-white" id="projects" data-aos="fade-up">
      <p className=" ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit text-white">
        ⚪ Projects
      </p>
      <div className="font-poppins text-xl text-wrap py-8 px-32 flex flex-row w-fit items-center justify-between gap-10  md:gap-0">
        <div>
          <h1 className="text-3xl">Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className="flex flex-row justify-around">
          <p className="font-inconsolata-normal text-xs md:w-1/3 w-24 text-justify  ">
          Here's a showcase of my recent projects, demonstrating my skills and expertise in various technologies.

          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-6 py-8 px-32">
        {projectsData.map((project, index) => (
          <Cards key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;