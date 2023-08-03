import React from "react";
import { Github, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

const Project2 = ({ name, desc, image2, video, url, gitUrl }) => {
  return (
    <div className="">
      <motion.section
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.9 }}
        // transition={{ duration: 0.3 }}
        className="flex bg-[#303030] w-[750px] h-[480px] object-fill rounded-lg "
      >
        <img
          src={image2}
          alt={name}
          className="w-[300px] h-[480px] object-cover rounded-l-lg"
        />
        <div className="m-auto font-c font-thin">
          <h2 className="text-white text-center font-medium text-[23px]">
            {name}
          </h2>
          <p className="text-white p-8 pt-2 text-justify text-[12px] py-6">
            {desc}
          </p>
          <div className="text-white px-8 pb-4 flex space-x-12">
            <div className="flex space-x-2 ">
              <Github className="h-[14px] w-[14px] m-1" />
              <a href={url} className="">
                View Code
              </a>
            </div>
            <div className="flex space-x-2">
              <Paperclip className="h-[14px] w-[14px] m-1" />
              <a href={gitUrl}>Live Preview</a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Project2;
