import React, { useState } from "react";
import { icons } from "../data/db";
import Skill from "./Skill";

const Skills = () => {
  const [currSkill, setCurrSkill] = useState("");
  return (
    <div>
      <div className="w-full py-16 px-4">
        <p className="text-[#00df9a] font-b text-center md:text-4xl sm:text-3xl text-2xl">
          SKILLS
        </p>
      </div>
      <div>
        <section
          className={`flex flex-col justify-center items-center`}
          id="Skills"
        >
          <div className={`flex flex-col`}>
            <div className="flex flex-row flex-wrap w-[70vw] justify-center">
              {icons.map((icon) => (
                <div
                  key={icon.skillName}
                  className="px-8 py-5 "
                  onMouseEnter={() => {
                    setCurrSkill(icon.skillName);
                  }}
                >
                  <Skill {...icon} />
                </div>
              ))}
            </div>
            <div className="w-full py-16 px-4">
              <div className="">
                <h3 className="md:text-3xl sm:text-2xl text-xl text-center text-white font-c ">{currSkill}</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
