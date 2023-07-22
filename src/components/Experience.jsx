import React from "react";

const Experience = ({ name, position, logo, tenure, overview }) => {
  return (
    <div className="hover:bg-[#cfb184] rounded-lg lg:h-[70vh] sm:h-[55vh]">
      <section
        className={`w-full flex flex-col p-10 lg:h-[90vh] sm:h-[60vh] rounded-lg hover:cursor-pointer hover:scale-105 duration-300 `}
      >
        <img
          src={logo}
          alt={name}
          className="object-contain rounded-[50%] md:w-[150px] md:h-[150px] w-24 h-24 text-white mx-auto my-4"
        />
        <div className="font-c">
          <h2 className=" text-center font-bold text-[20px] text-transform: uppercase">
            {position}
          </h2>
          <h2 className="text-white text-center text-[10px] ">{tenure}</h2>
          <p className="text-white text-justify text-[12px] py-6">
            {overview}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
