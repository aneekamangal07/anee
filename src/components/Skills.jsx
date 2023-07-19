import React, { useState } from "react";
import { icons } from "../data/db";
import Skill from "./Skill";

const Skills = () => {
  const [currSkill, setCurrSkill] = useState("");
  return (
    <div className="bg-[#FC9832] bg-opacity-75 lg:h-[90vh] sm:h-[90vh]">
      <div className="w-full py-16 px-4">
        <p className="font-e font-bold text-center tracking-widest md:text-5xl sm:text-5xl text-2xl">
          {/* <p className="text-[#cbff4d] text-center tracking-widest md:text-3xl sm:text-3xl text-2xl"> */}
          SKILLS
        </p>
      </div>
      <div>
        <section className={`flex flex-col justify-center items-center`}>
          <div className={`flex flex-col`}>
            <div className="bg-black flex flex-row flex-wrap justify-center p-60px">
              {icons.map((icon) => (
                <div
                  key={icon.skillName}
                  className="px-8 py-4"
                  onMouseEnter={() => {
                    setCurrSkill(icon.skillName);
                  }}
                >
                  <Skill {...icon} />
                </div>
              ))}
            </div>
            <div className="w-full py-16 px-4">
              <div className="bg-[#cbff4d] bg-opacity-30">
                <h3 className="text-black tracking-widest md:text-2xl sm:text-2xl text-xl text-center">
                  {currSkill}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
