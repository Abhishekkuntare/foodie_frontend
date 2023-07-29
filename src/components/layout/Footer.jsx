import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Foodie😋</h2>
        <p>I lost some weight once, but I found it again in the fridge.</p>
        <br />
        <em> I'm not gonna sugar coat the truth, I'm not Willy Wonka.</em>
        <strong>All right received @Foodie &#169; 2022</strong>
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
