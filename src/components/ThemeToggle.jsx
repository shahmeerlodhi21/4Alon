import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = ({ theme, setTheme }) => (
  <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    style={{
      background: "transparent",
      color: "var(--accent-contrast)",
      border: "none",
      fontSize: "1.3rem",
      cursor: "pointer",
      transition: "var(--transition)",
    }}
  >
    {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
  </button>
);

export default ThemeToggle;
