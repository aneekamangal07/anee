import React from "react";
import { Github, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

const Project = ({ name, desc, image, video, url, gitUrl }) => {
  return (
    <div className="rounded-lg">
      <motion.section
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-[#303030] w-[360px] h-[500px] object-fill shadow-xl flex flex-col rounded-lg "
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
            {desc}
          </p>
          <div className="text-white px-8 pb-4 flex space-x-12">
            <div className="flex space-x-2 ">
              <Github className="h-[14px] w-[14px] m-1" />
              <a href="" className="">
                View Code
              </a>
            </div>
            <div className="flex space-x-2">
              <Paperclip className="h-[14px] w-[14px] m-1" />
              <button>Live Preview</button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Project;
