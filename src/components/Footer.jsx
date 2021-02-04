import React from "react";

import "./Footer.css";

import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <a href="https://www.instagram.com/dev_insano/?hl=pt-br" target="blank">
        <img src={instagram} alt="logo do instagram" />
      </a>
      <a href="https://github.com/hique023" target="blank">
        <img src={github} alt="logo do github" />
      </a>
    </div>
  );
}
