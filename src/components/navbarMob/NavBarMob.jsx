import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./NavBarMob.module.css";
import { Signup } from "../../components/button/signup/Signup";
import { motion } from "framer-motion";
const variants = {
  hidden: {
    delay: 0.5,

    transition: { duration: 0.5 },
    y: -400,
  },
  visible: {
    y: 0,
    opacity: 1,
    delay: 2.5,
    transition: { duration: 0.5 },
  },
};

export const NavBarMob = ({ isOpen, setOpen }) => {
  return (
    <>
      <motion.nav
        variants={variants}
        animate={isOpen ? "visible" : "hidden"}
        className={classes.navbarMobile + " " + (isOpen ? classes.isOpen : "")}
      >
        <ul
          onClick={() => {
            setOpen(false);
          }}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <li>
              <NavLink
                to="/How-it-works"
                className={({ isActive }) => (isActive ? "active" : "none")}
              >
                How it Works
              </NavLink>
            </li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Our-story"
              className={({ isActive }) => (isActive ? "active-style" : "none")}
            >
              Our story
            </NavLink>
          </li>
        </ul>
      </motion.nav>
      <div
        className={classes.signup}
        onClick={() => {
          setOpen(false);
        }}
      >
        {isOpen ? <Signup></Signup> : ""}
      </div>
      {isOpen ? (
        <div
          className={classes.overlay}
          onClick={() => {
            setOpen(false);
          }}
        ></div>
      ) : null}
    </>
  );
};
