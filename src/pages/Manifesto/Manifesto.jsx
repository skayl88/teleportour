import React from "react";
import classes from "./Manifesto.module.css";
import { NavBarMob } from "../../components/navbarMob/NavBarMob";
import { motion, AnimatePresence } from "framer-motion";
export const Manifesto = () => {
  //get isOpen from NavBarMob

  let isMobile = false;
  if (window.innerWidth < 1050) {
    isMobile = true;
  }

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
    <div className="content_page">
      <div className={classes.wraper}>
        <div className={classes.main}>
          <motion.div
            className={classes.Manifesto}
            variants={ContainerAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{}}
          >
            <div className={classes.title}>
              <h2>Manifesto </h2>
            </div>

            <div className={classes.text}>
              <p>
                All people on earth have equal rights, including equal rights to
                travel
              </p>
              <p>
                Traveling to any place in the world should be affordable to
                anyone.
              </p>

              <p>
                Technologies should help people feel freer We are more than just
                our bodies.
              </p>
              <p>Our reality is what we feel. (Right now). At present.</p>
              <p>
                We are what we watch. When we think of our beloved who are miles
                away, we end up there with them.
              </p>
              <p>We can move through space - teleport.</p>
              <p className={classes.bold}>
                We are here so that anyone can be anywhere, anytime they want to
                be
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
