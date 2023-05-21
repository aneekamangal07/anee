import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="text-white max-w-[800px] mt-[100px] w-full h-screen mx-auto text-center">
        <h1 className="md:text-9xl sm:text-7xl text-6xl font-e font-bold md:py-6">
          Aneeka Mangal
        </h1>
        <div className="flex justify-center items-center font-c md:text-4xl sm:text-3xl text-xl font-bold">
          <p className="py-4 ">I am a</p>
          <Typed
            className="text-[#00df9a] md:pl-4 pl-2"
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
