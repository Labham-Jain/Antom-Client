import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, useLocation } from "react-router-dom";

interface AnimatedInterface {
  children: React.ReactNode;
}
const Animated = ({ children }: AnimatedInterface) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
};

export default Animated;
