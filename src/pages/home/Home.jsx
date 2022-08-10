import React from "react";
import classes from "./Home.module.css";
import { motion } from "framer-motion";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Backgruond from "../../components/background/Background";
const Home = () => {
  const ContainerAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.3,
        duration: 1.5,
      },
    },
  };
  return (
    <motion.div
      className="content_page"
      variants={ContainerAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{}}
    >
      <Backgruond></Backgruond>
      <div className={classes.title}>
        <h1>TELEPORTOUR</h1>
        <p>Enjoying travel becomes possible even without leaving home. </p>
        <NavLink to="/Manifesto">Learn more</NavLink>
        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse
              className="foreground"
              cx="50%"
              cy="50%"
              rx="50%"
              ry="50%"
            />
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

export default Home;
