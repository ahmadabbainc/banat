import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>©2022, banat inc., All right reserved</p>
      <p className="icons">
        <AiFillInstagram href="" />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
