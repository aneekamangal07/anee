import React from "react";

const Project = ({ name, desc, image, video, url, gitUrl }) => {
  return (
    <div className="rounded-lg">
      {/* <iframe class="w-full aspect-video hover:aspect-square" src={video}></iframe> */}

      <section className="bg-[#303030] w-[380px] h-[550px] object-fill shadow-xl flex flex-col rounded-lg hover:cursor-pointer hover:scale-105 duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-[230px] object-cover rounded-t-lg text-white"
        />
        <div className="p-4 m-auto flex-2">
          <h2 className="text-[#00df9a]  text-center font-bold font-c text-[23px] text-transform: uppercase">
            {name}
          </h2>
          {/* <h2 className="text-white text-center font-c text-[12px] ">{}</h2> */}
          <p className="text-white p-8 text-justify font-c text-text-[14px] py-6">
            {desc}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Project;
