import React from "react";
import Typed from "react-typed";
import eclipse from "../images/Eclipse.svg";
import herobg from "../images/hero-bg.svg";

const Hero = () => {
  return (
    <div className="h-[100vh]">
      <div className="text-[#f5efff] flex h-screen justify-center items-center">
        <div className="absolute ">
          <img src={herobg} alt="" />
        </div>
        <h1 className="text-9xl font-g text-[#cbff4d] md:py-6 relative">
          ANEEKA
        </h1>
        {/* <div className="flex justify-center items-center font-c md:text-4xl sm:text-3xl text-xl font-bold">
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
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
