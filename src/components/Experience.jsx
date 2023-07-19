import React from "react";

const Experience = ({ name, position, logo, tenure, overview }) => {
  return (
    <div className="hover:bg-[#CA498C] rounded-lg lg:h-[90vh] sm:h-[55vh]">
      <section
        className={`w-full flex flex-col p-10 lg:h-[90vh] sm:h-[60vh] rounded-lg hover:cursor-pointer hover:scale-105 duration-300 `}
      >
        <img
          src={logo}
          alt={name}
          className="object-contain rounded-[50%] md:w-[200px] md:h-[200px] w-28 h-28 text-white mx-auto my-4"
        />
        <div className="font-c">
          <h2 className="tracking-wider text-center font-bold text-[23px] text-transform: uppercase">
            {position}
          </h2>
          <h2 className="text-white text-center text-[12px] ">
            {tenure}
          </h2>
          <p className="text-white text-justify text-text-[14px] py-6">
            {overview}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
