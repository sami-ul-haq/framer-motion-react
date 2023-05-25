import React from "react";
import { motion as m } from "framer-motion";

const Services = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Services
    </m.div>
  );
};

export default Services;
