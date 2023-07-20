import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="h-4 max-w-[1240px] mx-auto px-4 py-4 text-white bg-none">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="w-full text-3xl text-[#d6c5f8] font-b">anee.</h1>
      </motion.div>
    </div>
  );
};

export default Navbar;
