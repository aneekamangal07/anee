import React from "react";
import anee from "../images/anee.jpg";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <div className="section bg-[#ECB6C1] lg:h-[80vh] sm:h-[40vh]">
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
        <div className="grid md:grid-cols-2 sm:gap-x-12 absolute px-8">
          <div className="mx-auto">
            <motion.img
              className="lg:w-[300px] my-4 rounded-[50%]"
              src={anee}
              alt=""
              animate={{ y: "0vw", opacity: 1 }}
              initial={{ y: "-2vw" }}
              whileInView={{ y: "-2vw" }}
              transition={{ type: "spring", stiffness: 10 }}
            />
          </div>
          <div className="flex flex-col tracking-wider text-[#865515] items-center justify-center text-7xl sm:text-5xl font-c font-bold lg:pr-40">
            <p>I AM ANEEKA MANGAL.</p>
            <p>I AM A FULL STACK WEB DEVELOPER.</p>
            <p>I LOVE PROGRAMMING.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
