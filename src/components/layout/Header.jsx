import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/logo.gif";
import {GiSodaCan} from "react-icons/gi"
import burger from "../../assets/home/burger.png"

import { motion } from "framer-motion";

const Header = ({isAuthenticated} ) => {
  return (
    <nav style={{ backgroundColor: "#feefdb" }}>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <Link to="/">
          <h4 style={{ color: "#fec51c" }}>
            <img className="header_img" src={burger} alt="logo" />
            KAFF
          </h4>
        </Link>
      </motion.div>

      <div>
        {/* <Link to="/store">Store</Link>
        <Link to="/stories">Stories</Link> */}
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>

        <Link to={isAuthenticated ? "/profile" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
