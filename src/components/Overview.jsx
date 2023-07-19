import React from "react";
import anee from "../images/anee.jpg";
import eclipse2 from "../images/Eclipse2.svg";
import "../components/Style.css";
import "../../src/app.css"

const Overview = () => {
  return (
    <div className="section bg-[#bea004] w-full lg:h-[75vh] sm:h-[110vh]">
      <div className="w-full py-16 px-4">
        <p className="p-4 text-black font-e font-bold tracking-widest text-center md:text-5xl sm:text-5xl text-2xl">
          ABOUT ME
        </p>
        {/* <div className="absolute">
          <img src={eclipse2} alt="" />
        </div> */}
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 absolute sm:py-4 px-8">
          <img
            className="w-[300px] mx-auto my-4 rounded-[50%]"
            src={anee}
            alt=""
          />
          <div className="flex flex-col justify-center text-justify font-c py-6 text-white ">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-normal py-2">
              Here's a little something about me!
            </h1>
            <p>
              I am a second year undergraduate at IIITM Gwalior. I am a
              dedicated developer and passionate for programming and have a keen
              interest in staying informed about new technologies. I am always
              seeking opportunities to expand my knowledge and skillset.
              Currently I am exploring Web Development along with programming. I
              am also captivated by Machine Learning and Artificial
              Intelligence. C++/C/Python are the languages I know and like to do
              programming in.
            </p>
            <p>
              Apart from technical stuff, I love sketching, I make realistic
              sketches and loves painting too.
            </p>
            <p>Would love to catch up to showcase my skills:)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
