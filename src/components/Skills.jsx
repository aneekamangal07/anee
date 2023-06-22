import React, { useState } from "react";
import { icons } from "../data/db";
import Skill from "./Skill";

const Skills = () => {
  const [currSkill, setCurrSkill] = useState("");
  return (
    <div className="lg:h-[110vh] sm:h-[120vh]">
      <div className="w-full py-16 px-4">
        <p className="text-[#cbff4d] text-center tracking-widest md:text-3xl sm:text-3xl text-2xl">
          SKILLS
        </p>
      </div>
      <div>
        <section className={`flex flex-col justify-center items-center`}>
          <div className={`flex flex-col`}>
            <div className="flex flex-row flex-wrap w-[70vw] justify-center">
              {icons.map((icon) => (
                <div
                  key={icon.skillName}
                  className="px-8 py-4 "
                  onMouseEnter={() => {
                    setCurrSkill(icon.skillName);
                  }}
                >
                  <Skill {...icon} />
                </div>
              ))}
            </div>
            <div className="w-full py-16 px-4">
              <div className="bg-[#cbff4d] opacity-30">
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
