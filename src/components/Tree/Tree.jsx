import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Tree.module.css";
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
export const Tree = ({ image, isimage, setImage }) => {
  return (
    <div>
      <AnimatePresence>
        <motion.svg
          className={classes.story_svg}
          xmlns="http://www.w3.org/2000/svg"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}
          width={image[isimage].width}
          height={image[isimage].height}
        >
          <motion.path
            stroke="#fff"
            variants={variants}
            key={isimage}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            className={classes.svg1}
            d={image[isimage].svg}
          />
        </motion.svg>
      </AnimatePresence>
    </div>
  );
};
