import React from "react";
import anee from "../images/anee.jpg"
const Overview = () => {
  return (
    <div>
      <div className="w-full py-16 px-4">
        <p className="text-[#00df9a] font-b text-center md:text-4xl sm:text-3xl text-2xl">ABOUT</p>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[300px] mx-auto my-4 rounded-[50%]" src={anee} alt="" />
          <div className="flex flex-col justify-center font-c py-6 text-white">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
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
            <p>Would love to catch up showcase my skills:)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
