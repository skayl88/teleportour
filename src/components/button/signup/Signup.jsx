import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./signup.module.css";
export const Signup = () => {
  return (
    <div className={classes.signup_button}>
      <NavLink to="/subscribe">Sign up for product updates</NavLink>
    </div>
  );
};
