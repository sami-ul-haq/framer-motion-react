import React from "react";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Contact
    </m.div>
  );
};

export default Contact;
