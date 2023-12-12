import React from "react";
import herobg from "../images/hero-bg.svg";
import { motion } from "framer-motion";
import star from "../images/scribbles/star.svg";
const Hero = () => {
  return (
    <div className="section lg:h-[90vh] sm:h-[60vh]">
      <div className="text-[#f5efff] flex h-screen justify-center items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          src={star}
          alt=""
          className="absolute top-[4vh] right-[280px]"
        />
        <div className="absolute ">
          <img
            src={herobg}
            alt=""
            className="md:h-[500px] md:w-[500px] sm:h-[350px] sm:w-[350px]"
          />
        </div>

        <motion.h1
          className=" sm:text-[90px] md:text-9xl font-d text-[#cbff4d] md:py-6 relative"
          animate={{ x: "0vw", opacity: 1 }}
          initial={{ x: "100vw" }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }}>
            ANEEKA
          </motion.div>
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
