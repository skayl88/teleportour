import React from "react";
import { NavBar } from "../navbar/NavBar";
import { useState } from "react";
import "./Header.css";
import logo from "../../static/logo.png";

import { NavBarMob } from "../navbarMob/NavBarMob";
import { NavLink } from "react-router-dom";

export const Header = ({ isOpen, setIsOpen }) => {
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  let isMobile = false;
  if (window.innerWidth < 1050) {
    isMobile = true;
  }

  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="Teleportor" />
        </div>
      </NavLink>

      <NavBar />
      {isMobile && <NavBarMob isOpen={isOpen} setOpen={setIsOpen} />}

      <button
        onClick={() => {
          handleOpen(isOpen);
        }}
        className={"menu_icon " + (isOpen ? "active" : "")}
      >
        <span />
      </button>
    </header>
  );
};
