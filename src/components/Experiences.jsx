import React from "react";
import { experienceCards } from "../data/db";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <div className="bg-[#021320]">
      <div className="w-full py-16 px-4 pb-0">
        <p className="text-[#00df9a] font-b text-center md:text-4xl sm:text-3xl text-2xl">
          EXPERIENCE
        </p>
      </div>
      <div>
        <section
          className={`flex flex-col justify-center items-center`}
          id="Skills"
        >
          <div className={`w-full py-[10rem] px-4`}>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
              {/* <div className="flex flex-row justify-center"> */}
              {experienceCards.map((card) => (
                <div key={card.name} className="px-8 py-5 ">
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
