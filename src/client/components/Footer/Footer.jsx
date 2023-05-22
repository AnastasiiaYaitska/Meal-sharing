import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import { FooterBar } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterBar>
      <AiOutlineCopyrightCircle />
      <p> Created by Anastasiia Yaitska. 2023</p>
    </FooterBar>
  );
};

export default Footer;
