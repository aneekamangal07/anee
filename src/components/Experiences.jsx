import React from "react";
import { experienceCards } from "../data/db";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <div className="section bg-[#ba2160] w-full py-4 px-4 lg:h-[125vh] sm:h-[210vh]">
      <div className="w-full py-16 px-4">
        <p className="font-e font-bold tracking-widest text-center md:text-5xl sm:text-5xl text-2xl">
          {/* <p className="text-[#cbff4d] text-center tracking-widest md:text-3xl sm:text-3xl text-2xl"> */}
          EXPERIENCE
        </p>
      </div>
      <div>
        <section className={`flex flex-col justify-center items-center `}>
          <div className={`w-full py-[20px] px-4`}>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
              {/* <div className="flex flex-row justify-center"> */}
              {experienceCards.map((card) => (
                <div key={card.name} className="px-4 ">
                  <Experience {...card} />
                </div>
              ))}
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experiences;
