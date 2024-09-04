import React from "react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <motion.main
      className="p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-[3rem] font-extrabold text-center">About Me</h1>
      <hr className="border-t-2 rounded-lg border-gray-300 my-4 mx-[20%]" />
    </motion.main>
  );
};

export default AboutMe;
