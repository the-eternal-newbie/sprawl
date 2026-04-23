import React, { useEffect } from "react";
import type { GlobalProvider } from "@ladle/react";

import "./styles.css";
import "../src/themes/galactic-terminal.css";


import { MotionProvider } from "../src/motion/index.js";

export const Provider: GlobalProvider = ({ children }) => {
  // For now, always apply the galactic-terminal theme.
  // Later, we'll wire this to a Ladle control for theme switching.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "galactic-terminal");
  }, []);

  return <MotionProvider>{children}</MotionProvider>;
};