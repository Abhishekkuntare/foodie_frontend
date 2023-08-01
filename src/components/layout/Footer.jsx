import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <h4 style={{ color: "#fec51c" }}>
          <img width={100} className="header_img" src={logo} alt="logo" />
        </h4>
        <p>I lost some weight once, but I found it again in the fridge.</p>
        <br />
        <em> I'm not gonna sugar coat the truth, I'm not Willy Wonka.</em>
        <strong>All right received @KAFF &#169; 2022</strong>
      </div>
      <aside>
        <h4>Follow us</h4>
        <a href="https://github.com/Abhishekkuntare">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/abhishek__kuntare/">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
