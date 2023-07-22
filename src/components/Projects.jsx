import React, { useState } from "react";
import { projectCards } from "../data/db";
import Project from "./Project";
import bubbles from "../images/scribbles/bubbles.svg";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState([projectCards[0]]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  
  return (
    <div className="section bg-[#BB4247] w-full lg:h-[190vh] sm:h-[75vh]">
      {/* Curves */}
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
            fill="#BD7225"
          ></path>
        </svg>
      </div>
      {/* Header */}
      <div className="dark font-e font-bold tracking-widest text-center md:text-7xl sm:text-5xl text-2xl">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          src={bubbles}
          alt=""
          className="absolute right-[460px] top-20"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I made Projects
        </motion.p>
      </div>
      {/* Projects */}
      <div className="grid grid-cols-3 item-center justify-center p-6">
        {/* Small Card */}
        <div className="">
          <h3>{projectCards[0].name}</h3>
          <p>{projectCards[0].desc}</p>
        </div>
        {/* Big Card */}
        <div style={{ marginLeft: "20px" }}>
          <h3>{selectedProject.name}</h3>
          <p>{selectedProject.desc}</p>
        </div>
        {/* Project Names */}
        <div className="">
          {projectCards.map((project) => (
            <div key={project.name} onClick={() => handleProjectClick(project)}>
              <h3 className="font-e text-6xl cursor-pointer">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-col justify-center items-center py-4">
        <section className={``}>
          <div className={`w-full py-[20px] px-4`}>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-20 ">
              {projectCards.map((card) => (
                <div key={card.name} className="px-4 ">
                  <Project {...card} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
