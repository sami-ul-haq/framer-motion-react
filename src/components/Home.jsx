import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const hoverVarient = {
  init: {
    x: "-100vw",
  },
  mid: {
    x: 0,
  },
  hoverI: {
    scale: 1.1,
    transition: {
      yoyo: 10,
    },
  },
};

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-red-200 flex justify-center items-center"
    >
      <div className="text-center">
        <h1 className="text-3xl">Home</h1>
        <m.button
          variants={hoverVarient}
          initial="init"
          animate="mid"
          whileHover="hoverI"
          className="bg-blue-500 rounded-md block border-none p-5 mt-3 text-lg hover:bg-blue-800 hover:text-white"
        >
          <Link to="/contact">
          Contact Us
          </Link>
        </m.button>
      </div>
    </m.div>
  );
};

export default Home;
