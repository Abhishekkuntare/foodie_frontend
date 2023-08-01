import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { FaHamburger } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";

import { motion } from "framer-motion";
import Mobile from "./Mobile";
import { useState } from "react";

const Header = ({ isAuthenticated }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav style={{ backgroundColor: "#feefdb" }}>
        <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
          <Link to="/">
            <h4 style={{ color: "#fec51c" }}>
              <img className="header_img" src={logo} alt="logo" />
            </h4>
          </Link>
        </motion.div>

        <div className="header_default">
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/cart">
            <FiShoppingCart />
          </Link>

          <Link to={isAuthenticated ? "/profile" : "/login"}>
            {isAuthenticated ? <FaUser /> : <FiLogIn />}
          </Link>
        </div>
        <div className="header_mobile">
          <FaHamburger
            style={{ marginTop: "-10px" }}
            size={30}
            color="black"
            onClick={handleOpen}
          />
        </div>
      </nav>
      {/* header mobile  */}
      {open && (
        <Mobile
          isAuthenticated={isAuthenticated}
          open={open}
          setOpen={setOpen}
          GiCrossMark={GiCrossMark}
          handleOpen={handleOpen}
        />
      )}
    </>
  );
};

export default Header;
