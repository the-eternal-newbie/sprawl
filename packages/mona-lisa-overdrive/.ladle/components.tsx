import type { GlobalProvider } from "@ladle/react";
import { useEffect } from "react";
import "../src/styles/theme.css";
import "../src/themes/galactic-terminal.css";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  // For now, always apply the galactic-terminal theme.
  // Later, we'll wire this to a Ladle control for theme switching.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "galactic-terminal");
  }, []);

  return children;
};