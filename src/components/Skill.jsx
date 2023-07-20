import React, { useEffect } from "react";
import { useDragControls, useSpring } from "framer-motion";
import { motion } from "framer-motion";

const Skill = ({ skillName, skillIcon }) => {
  return (
    <div>
      <motion.section
        className={`flex flex-col`}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          drag
          dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
          src={skillIcon}
          alt={skillName}
          className="object-contain md:w-20 md:h-20 w-14 h-14 text-white"
        />
      </motion.section>
    </div>
  );
};

export default Skill;
