import React from "react";
import { motion } from "framer-motion";

const Experience = ({ name, position, logo, tenure, overview }) => {
  return (
    <div className="hover:bg-[#c16de9] rounded-[5%] lg:h-[80vh] lg:w-full sm:h-[10%] sm:w-[60%] mx-auto">
      <motion.section
        // whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col p-10 lg:h-[95vh] sm:h-[10%]"
      >
        <img
          src={logo}
          alt={name}
          className="object-contain rounded-[50%] md:w-[150px] md:h-[150px] w-24 h-24 text-white mx-auto my-4"
        />
        <div className="font-c">
          <h2 className=" text-center font-bold text-xl text-transform: uppercase">
            {position}
          </h2>
          <h2 className="text-white text-center text-[10px] ">{tenure}</h2>
          <p className="text-white text-justify text-xl py-6">{overview}</p>
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
