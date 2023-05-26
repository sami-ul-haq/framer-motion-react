import React from "react";
import { motion as m } from "framer-motion";

const Services = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-red-500 flex justify-center items-center"
    >
      <h1 className="text-3xl">Services</h1>
    </m.div>
  );
};

export default Services;
