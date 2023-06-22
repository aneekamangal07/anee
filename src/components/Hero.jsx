import React from "react";
import Typed from "react-typed";
import eclipse from "../images/Eclipse.svg";

const Hero = () => {
  return (
    <div className="h-[80vh]">
      <div className="text-[#f5efff] max-w-[800px] mt-[100px] w-full h-screen mx-auto text-center">
        <div className="bg-none opacity-60 absolute top-0 left-0">
          <img src={eclipse} alt="" />
        </div>
        <h1 className="text-9xl font-e font-bold md:py-6 ">Aneeka Mangal</h1>
        <div className="flex justify-center items-center font-c md:text-4xl sm:text-3xl text-xl font-bold">
          <p className="py-4 ">I am a</p>
          <Typed
            className="text-[#d6c5f8] md:pl-4 pl-2"
            // className="text-[#453761] md:pl-4 pl-2"
            strings={[
              "Web Developer",
              "Programmer",
              "UI/UX Designer",
              "Artist",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
