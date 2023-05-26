import React from "react";
import { motion as m } from "framer-motion";

const hoverVarient = {
  // hover: { scale: 1.1} // if we want to animate once
  // hover: { scale: [1,1.1,1,1.2,1,1.3,1]} // if we want to animate multiple times
  hover: {
    scale: 1.1,
    transition: {
      yoyo : 10
    }
  },
};

const About = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-red-300 flex justify-center items-center"
    >
      <div className="text-center">
        <m.h1
          className="text-3xl"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "-100vw" }}
        >
          About
        </m.h1>
        <m.button
          variants={hoverVarient}
          whileHover={"hover"}
          // transition={{
          //   delay: 1
          // }}
          className="bg-blue-500 rounded-md block border-none p-5 mt-3 text-lg hover:bg-blue-800 hover:text-white"
        >
          Back to Home Page
        </m.button>
      </div>
    </m.div>
  );
};

export default About;
