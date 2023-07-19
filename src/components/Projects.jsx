import React from "react";
import { projectCards } from "../data/db";
import Project from "./Project";
import "../components/Style.css";
import "../../src/app.css";

const Projects = () => {
  return (
    <div className="section bg-[#F9585F] bg-opacity-75 w-full lg:h-[200vh] sm:h-[370vh]">
      <div className="dark font-e font-bold tracking-widest text-center md:text-5xl sm:text-5xl text-2xl">PROJECTS</div>
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
      <div className="curve2"></div>
    </div>
  );
};

export default Projects;
