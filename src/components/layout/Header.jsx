import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/logo.gif";

import { motion } from "framer-motion";

const Header = ({isAuthenticated} ) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        {/* <IoFastFoodOutline /> */}
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </motion.div>

      <div>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>

        <Link to={isAuthenticated ? "/profile" : "/login"}>
          {isAuthenticated ? <FaUser  /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
