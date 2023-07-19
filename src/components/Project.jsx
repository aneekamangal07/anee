import React from "react";
import { Github, Paperclip } from "lucide-react";

const Project = ({ name, desc, image, video, url, gitUrl }) => {
  return (
    <div className="rounded-lg">
      {/* <iframe class="w-full aspect-video hover:aspect-square" src={video}></iframe> */}

      <section className="bg-[#303030] w-[380px] h-[550px] object-fill shadow-xl flex flex-col rounded-lg hover:cursor-pointer hover:scale-105 duration-300">
        <img
          src={image}
          alt={name}
          className="w-[380px] h-[230px] object-cover rounded-t-lg text-white"
        />
        <div className=" m-auto flex-2 font-c font-thin">
          <h2 className="text-white text-center font-medium text-[23px] text-transform: uppercase">
            {name}
          </h2>
          <p className="text-white p-8 pt-2 text-justify text-text-[14px] py-6">
            {desc}
          </p>
          <div className="text-white px-8 pb-4 flex space-x-16">
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
      </section>
    </div>
  );
};

export default Project;
