import React from "react";
import herobg from "../images/hero-bg.svg";

const Hero = () => {
  return (
    <div className="section h-[100vh]">
      <div className="text-[#f5efff] flex h-screen justify-center items-center">
        <div className="absolute ">
          <img
            src={herobg}
            alt=""
            className="md:h-[500px] md:w-[500px] sm:h-[350px] sm:w-[350px]"
          />
        </div>
        <h1 className=" sm:text-[90px] md:text-9xl font-d text-[#cbff4d] md:py-6 relative">
          ANEEKA
        </h1>
      </div>
      {/* <div className="curve"></div> */}
    </div>
  );
};

export default Hero;
