import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./TeamsPhoto.module.css";

const PhotoAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 0.9,
    transition: {
      duration: 0.5,
    },
  },
};

export const TeamsPhoto = ({ photo, id, isImage, setImage, ...props }) => {
  const [isPhoto, setIsPhoto] = useState(false);

  useEffect(() => {
    if (isImage == id) {
      setIsPhoto(true);
    } else {
      setIsPhoto(false);
    }
  }, [isImage, id]);
  return (
    <>
      <motion.img
        src={photo}
        alt=""
        variants={PhotoAnimation}
        initial="hidden"
        animate={isPhoto ? "visible" : "hidden"}
        exit="hidden"
      ></motion.img>
    </>
  );
};
