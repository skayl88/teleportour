import React from "react";
import { NavBar } from "../navbar/NavBar";
import { useState } from "react";
import "./Header.css";
import { NavBarMob } from "../navbarMob/NavBarMob";

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
      <p>TELEPORTOUR</p>
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
