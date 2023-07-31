import React from "react";
import { motion } from "framer-motion";
import "../../styles/all_media_queries.css"


const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard menuCard_mobile"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ delay }}
    >
      <div>Item{itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
