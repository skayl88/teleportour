import React from "react";
import { Routes, Route, useLocation, Switch } from "react-router-dom";
import { allRoutes } from "../routes";
import { motion, AnimatePresence } from "framer-motion";
export const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        {allRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};
