import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import { motion } from "framer-motion";

export const NavBar = () => {
  return (
    <>
      <motion.nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              Home
            </NavLink>
          </li>
          <li>
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
              Teams
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
    </>
  );
};
