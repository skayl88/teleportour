import React from "react";
import { motion } from "framer-motion";
import { AppRouter } from "../AppRouter";

export const Main = () => {
  return (
    <motion.main>
      <AppRouter />
    </motion.main>
  );
};
