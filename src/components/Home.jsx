import React from "react";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      className="w-full h-screen shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Home
    </m.div>
  );
};

export default Home;
