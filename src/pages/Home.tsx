// src/pages/Home.tsx
import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.main
      className="p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold">Welcome to Hyo joo's Portfolio</h2>
      <p>This is the home page</p>
    </motion.main>
  );
};

export default Home;
