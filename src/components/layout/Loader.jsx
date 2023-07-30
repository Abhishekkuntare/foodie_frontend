import React from "react";
import { motion } from "framer-motion";
import loader from "../../assets/loader.gif";

const Loader = () => {
  const options = {
    initial: {
      opactiy: 0,
    },
    animate: {
      opactiy: 1,
    },
    transition: {
      ease: "linear",
      repeat: "Infinity",
      repeatType: "reverse",
    },
  };
  return (
    <div className="loader">
      <div>
        <motion.img initial={{ ...options }} src={loader} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
