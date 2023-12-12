import React, { useState } from "react";
import { projectCards } from "../data/db";
import Project from "./Project";
import bubbles from "../images/scribbles/bubbles.svg";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProjectName, setSelectedProjectName] = useState(
    projectCards[0].name
  );

  const handleProjectClick = (projectName) => {
    setSelectedProjectName(projectName);
  };

  const selectedProject = projectCards.find(
    (project) => project.name === selectedProjectName
  );

  return (
    <div className="section bg-[#1a202c] h-auto">
      <div class="custom-shape-divider-top-1689796911">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
            fill="#E58FD6"
          ></path>
        </svg>
      </div>
      <div className="text-[#cdcdcd] font-c font-bold tracking-widest text-center md:text-7xl sm:text-5xl py-8">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          src={bubbles}
          alt=""
          className="absolute lg:left-80 sm:left-16"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects I made
        </motion.p>
      </div>
      {/* Projects */}
      <div className="lg:flex p-6">
        {/* Small Card
        <div className="flex-1 hidden">
          <Project name={selectedProject.name} image={selectedProject.image} />
        </div> */}
        {/* Big Card */}
        <div className="flex-2">
          <Project
            name={selectedProject.name}
            desc1={selectedProject.desc1}
            desc2={selectedProject.desc2}
            desc3={selectedProject.desc3}
            image2={selectedProject.image2}
            url={selectedProject.url}
            gitUrl={selectedProject.gitUrl}
          />
        </div>
        {/* Project Names */}
        <div className="flex-1 p-4 ">
          {projectCards.map((project) => (
            <div
              key={project.name}
              onClick={() => handleProjectClick(project.name)}
            >
              <h3 className="font-c text-6xl cursor-pointer lg:py-4 text-center text-[#cdcdcd]">
                {project.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
