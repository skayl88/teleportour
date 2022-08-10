import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Background.module.css";
import background from "./BG.mp4";
import backgroundWebm from "./bgvideo.webm";
export default function Backgrond() {
  return (
    <>
      <video
        className={classes.bgVideo}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      >
        <source src={backgroundWebm} type='video/webm; codecs="vp8, vorbis"' />
        <source
          src={background}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </>
  );
}
