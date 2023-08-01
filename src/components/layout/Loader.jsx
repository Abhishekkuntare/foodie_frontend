import React from "react";
import { motion } from "framer-motion";
import loader from "../../assets/loader.gif";
// import an from "../../assets/animation.mp4";
import an from "../../assets/animations/an.mp4";

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
        {/* <motion.img initial={{ ...options }} src={loader} alt="loader" /> */}
        <video
          width={200}
          style={{ borderRadius: "50%" }}
          muted
          loop
          autoPlay
          src={an}
        ></video>
      </div>
    </div>
  );
};

export default Loader;
