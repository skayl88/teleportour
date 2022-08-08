import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Background.module.css";
import background from "./background.mp4";
import backgroundWebm from "./bgvideo.webm";
export default function Backgrond() {
  return (
    <>
      <video
        className={classes.bgVideo}
        src={backgroundWebm}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      ></video>
    </>
  );
}
