import React from "react";
import classes from "./Subscribe.module.css";
import { NavBarMob } from "../../components/navbarMob/NavBarMob";
import { motion, AnimatePresence } from "framer-motion";
export const Subscribe = () => {
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
            className={classes.subscribe}
            variants={ContainerAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{}}
          >
            <h1>Sign up</h1>
            <form action="submin">
              <fieldset className={classes.fildset_sub}>
                <input
                  className={classes.fild_sub}
                  type="text"
                  name="FirstName"
                  placeholder="First name *"
                  id="FirstName"
                />
              </fieldset>
              <fieldset className={classes.fildset_sub}>
                <input
                  className={classes.fild_sub}
                  type="text"
                  name="firstName"
                  placeholder="Second name *"
                  id="secondName"
                />{" "}
              </fieldset>{" "}
              <fieldset className={classes.fildset_sub}>
                <input
                  className={classes.fild_sub}
                  type="mail"
                  name="mail"
                  placeholder="Email *"
                  id="Email"
                />
              </fieldset>
              <button className={classes.sub_button}>Submit</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
