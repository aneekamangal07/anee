import React from "react";

const Experience = ({ name, position, logo, tenure, overview }) => {
  return (
    <div className="hover:bg-[#303030] rounded-lg h-[85vh] ">
      <section
        className={`w-full shadow-xl flex flex-col p-10 h-[85vh] rounded-lg hover:cursor-pointer hover:scale-105 duration-300 `}
      >
        <img
          src={logo}
          alt={name}
          className="object-contain rounded-[50%] md:w-[200px] md:h-[200px] w-28 h-28 text-white mx-auto my-4"
        />
        {/* <h1 className="text-[22px] text-[#00df9a] font-bold font-c text-center mb-4">{name}</h1> */}
        <h2 className="text-[#d6c5f8] tracking-wider text-center font-bold font-c text-[23px] text-transform: uppercase">
          {position}
        </h2>
        <h2 className="text-white text-center font-c text-[12px] ">{tenure}</h2>
        <p className="text-white text-justify font-c text-text-[14px] py-6">
          {overview}
        </p>
      </section>
    </div>
  );
};

export default Experience;
