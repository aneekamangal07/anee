import React from "react";
import anee from "../images/anee.jpg";
import { motion } from "framer-motion";
import shine from "../images/scribbles/shine.svg";

const Overview = () => {
  return (
    <div className="bg-[#ECB6C1] h-auto">
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
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        src={shine}
        alt=""
        className="absolute left-[5%]"
      />
      <div className="h-screen flex items-center lg:text-right sm:text-center">
        <div className="grid lg:grid-cols-2 absolute ">
          <div className="mx-auto">
            <motion.img
              className="rounded-[50%]"
              src={anee}
              alt=""
              animate={{ y: "0vw", opacity: 1 }}
              initial={{ y: "-2vw" }}
              whileInView={{ y: "-2vw" }}
              transition={{ type: "spring", stiffness: 10 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
            />
          </div>
          <div className="flex flex-col tracking-wider text-[#865515] items-center justify-center lg:text-6xl sm:text-5xl font-c font-bold lg:pr-40">
            <motion.p
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              I AM ANEEKA MANGAL.
            </motion.p>
            <motion.p
              className="text-[#ad7a37]"
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              I AM A FULL STACK WEB DEVELOPER.
            </motion.p>
            <motion.p
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              I LOVE PROGRAMMING.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
