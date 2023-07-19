import React from "react";
import { projectCards } from "../data/db";
import Project from "./Project";
import "../components/Style.css";
import "../../src/app.css";

const Projects = () => {
  return (
    <div className="section bg-[#BB4247] w-full lg:h-[190vh] sm:h-[370vh]">
      <div class="custom-shape-divider-top-1689796911">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
            fill="#BD7225"
          ></path>
        </svg>
      </div>
      <div className="dark font-e font-bold tracking-widest text-center md:text-5xl sm:text-5xl text-2xl">
        PROJECTS
      </div>
      {/* <div className="w-full py-16 px-4">
        <p className="">
          PROJECTS
        </p>
      </div> */}
      <div className="flex flex-col justify-center items-center py-4">
        <section className={``}>
          <div className={`w-full py-[20px] px-4`}>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-20 ">
              {/* <div className="flex flex-row justify-center"> */}
              {projectCards.map((card) => (
                <div key={card.name} className="px-4 ">
                  <Project {...card} />
                </div>
              ))}
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
