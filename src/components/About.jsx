import React from "react";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      About
    </m.div>
  );
};

export default About;
