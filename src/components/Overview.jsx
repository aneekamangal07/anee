import React from "react";
import anee from "../images/anee.jpg";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <div className="section bg-[#bea004] w-full lg:h-[85vh] sm:h-[35vh]">
      <div class="custom-shape-divider-top-1689796382">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            class="shape-fill"
            width="300%"
          ></path>
        </svg>
      </div>
      <div className="w-full h-screen flex items-center px-4 text-right">
        {/* <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="absolute right-[270px] top-[140px]"
          src={spark}
          alt=""
        /> */}
        {/* <p className="px-[270px] pt-4 text-black font-e font-bold tracking-widest md:text-5xl sm:text-5xl text-2xl">
          ABOUT ME
        </p> */}

        {/* <div className="absolute top-[150px] right-2">
          <img src={eclipse2} alt="" height="400px" width="600px"/>
        </div> */}
        <div className="max-w-full mx-auto grid md:grid-cols-2 absolute sm:py-4 px-8">
          <motion.img
            className="w-[300px] mx-auto my-4 rounded-[50%]"
            src={anee}
            alt=""
            animate={{ y: "0vw", opacity: 1 }}
            initial={{ y: "-2vw" }}
            whileInView={{ y: "-2vw" }}
            transition={{ type: "spring", stiffness: 10 }}
          />
          <div className="flex flex-col tracking-wider text-[#8D473D] justify-right text-7xl pr-[100px] font-e font-bold py-6">
            <p>I AM ANEEKA MANGAL.</p>
            <p>I AM A FULL STACK WEB DEVELOPER.</p>
            <p>I LOVE PROGRAMMING.</p>
            {/* <h1 className="md:text-3xl sm:text-2xl text-xl font-normal py-2">
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
            <p>Would love to catch up to showcase my skills:)</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
