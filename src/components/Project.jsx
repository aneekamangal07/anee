import React from "react";
import { Github, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

const Project = ({ name, desc1, desc2, desc3, image2, video, url, gitUrl }) => {
  return (
    <div className="flex items-center justify-center lg:pl-24 sm:pb-8">
      <motion.section
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.9 }}
        // transition={{ duration: 0.3 }}
        className="lg:flex bg-[#303030] lg:w-[800px] sm:w-[70%] h-[70%] object-fill rounded-[5%]"
      >
        <img
          src={image2}
          alt={name}
          className="lg:w-[400px] lg:h-[400px] sm:w-full object-cover rounded-l-[5%]"
        />
        <div className="m-auto font-c text-center font-thin p-4">
          <h2 className="text-white font-medium uppercase text-[25px]">
            {name}
          </h2>
          <div className="text-white p-8 pt-2 text-justify text-[14px] py-6">
            <p className="pb-4">{desc1}</p>
            <p className="pb-4">{desc2}</p>
            <p className="pb-4">{desc3}</p>
          </div>

          <div className="text-white px-8 pb-4 flex space-x-12 font-medium">
            <motion.div
              className="flex space-x-2 "
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
            >
              <Github className="h-[14px] w-[14px] m-1" />
              <a href={gitUrl} className="">
                View Code
              </a>
            </motion.div>
            <motion.div
              className="flex space-x-2"
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
            >
              <Paperclip className="h-[14px] w-[14px] m-1" />
              <a href={url}>Live Preview</a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Project;
