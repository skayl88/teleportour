import React from "react";
import classes from "./about.module.css";
import { motion } from "framer-motion";
const TextAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
  }),
};
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
export const About = () => {
  return (
    <motion.div
      className="content_page"
      variants={ContainerAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{}}
    >
      <motion.div className={classes.about_wraper}>
        <div className={classes.main_text}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={TextAnimation}
            className={classes.block}
          >
            <p>
              BILLIONAIR is an online livestreaming platform that connects
              virtual travelers and guides.
            </p>

            <p>
              Our revolutionary immersive model offers users a strong virtual
              travelling community, 360-degree VR video capabilities, and live
              interaction between travelers and guides.
            </p>
            <p>
              A traveler can find a way to enjoy traveling without even leaving
              the home. We are creating a model to teleport and entertain people
              and give them travel emotions. Local guides, who teleport
              travelers, get paid for this.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
