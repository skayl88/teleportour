import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./TeamsText.module.css";
const variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    with: {
      duration: 0.5,
      ease: "easeInOut",
    },
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};
export const TeamsText = ({ title, text, body }) => {
  return (
    <div className={classes.content}>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{body}</p>
    </div>
  );
};
