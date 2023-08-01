import React from "react";
import { FaUser } from "react-icons/fa";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../styles/headerMobile.css";
import logo from "../../assets/logo.png";

const Mobile = ({ isAuthenticated, setOpen, GiCrossMark, handleOpen }) => {
  return (
    <div className="headerMobile_main">
      <h4 style={{ color: "#fec51c" }}>
        <img
          onClick={handleOpen}
          style={{ marginBottom: 20, width: 200 }}
          className="header_img"
          src={logo}
          alt="logo"
        />
      </h4>
      <GiCrossMark
        style={{ marginTop: "-10px" }}
        size={30}
        color="black"
        onClick={handleOpen}
      />
      <div className="mobile_header_link">
        <Link onClick={handleOpen} to="/store">
          Store
        </Link>
        <Link onClick={handleOpen} to="/stories">
          Stories
        </Link>
        <Link onClick={handleOpen} to="/contact">
          Contact
        </Link>
        <Link onClick={handleOpen} to="/about">
          About
        </Link>
      </div>

      <div className="mobile_header_icons">
        <Link onClick={handleOpen} to="/cart">
          <FiShoppingCart size={30} color="black" />
        </Link>

        <Link onClick={handleOpen} to={isAuthenticated ? "/profile" : "/login"}>
          {isAuthenticated ? (
            <FaUser
              onClick={handleOpen}
              size={25}
              color="black"
              style={{ marginLeft: 10 }}
            />
          ) : (
            <FiLogIn onClick={handleOpen} size={25} color="black" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Mobile;
