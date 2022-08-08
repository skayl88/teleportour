import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./step.module.css";
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

export const Step = ({ image, isimage, setImage, title, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <AnimatePresence>
        <motion.svg
          ref={ref}
          className={classes.icon_svg}
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
            {...(isInView ? { animate: "visible" } : { animate: "hidden" })}
            className={classes.svg1}
            d={image[isimage].svg}
          />
        </motion.svg>
      </AnimatePresence>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
