import React from "react";
import { Github, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

const Project2 = ({
  name,
  desc1,
  desc2,
  desc3,
  image2,
  video,
  url,
  gitUrl,
}) => {
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
        <div className="m-auto font-c text-center font-thin">
          <h2 className="text-white  font-medium uppercase text-[25px]">
            {name}
          </h2>
          <div className="text-white p-8 pt-2 text-justify text-[14px] py-6">
            <p className="pb-4">{desc1}</p>
            <p className="pb-4">{desc2}</p>
            <p className="pb-4">{desc3}</p>
          </div>

          <div className="text-white px-8 pb-4 flex space-x-12 font-medium">
            <div className="flex space-x-2 ">
              <Github className="h-[14px] w-[14px] m-1" />
              <a href={gitUrl} className="">
                View Code
              </a>
            </div>
            <div className="flex space-x-2">
              <Paperclip className="h-[14px] w-[14px] m-1" />
              <a href={url}>Live Preview</a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Project2;
