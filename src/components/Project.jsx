import React from "react";
import { motion } from "framer-motion";

const Project = ({ name, image}) => {
  return (
    <div className="rounded-lg">
      <motion.section
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-[#303030] w-[300px] h-[300px] object-fill shadow-xl flex flex-col rounded-lg "
      >
        <img
          src={image}
          alt={name}
          className="w-[380px] h-[230px] object-cover rounded-t-lg text-white"
        />
        <div className=" m-auto flex-2 font-c font-thin">
          <h2 className="text-white text-center font-medium text-[23px]">
            {name}
          </h2>
          <p className="text-white p-8 pt-2 text-justify text-[12px] py-6">
            small description
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Project;
