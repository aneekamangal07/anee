import React from "react";

const Skill = ({ skillName, skillIcon }) => {
  return (
    <div>
      <section className={`flex flex-col hover:cursor-pointer hover:scale-150 duration-300`}>
        <img
          src={skillIcon}
          alt={skillName}
          className="object-contain  md:w-20 md:h-20 w-14 h-14 text-white"
        />
      </section>
    </div>
  );
};

export default Skill;
