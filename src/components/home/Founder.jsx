import React from "react";
import { motion } from "framer-motion";

import founder from "../../assets/burger1.png";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={founder} alt="founder" height={200} width={200} />
        <h1>Abhishek kuntare</h1>

        <p>hey there</p>
        <br />
      </motion.div>
    </section>
  );
};

export default Founder;
