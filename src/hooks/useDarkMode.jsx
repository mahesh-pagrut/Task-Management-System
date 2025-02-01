import React, { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    const root = document.documentElement;
    const colorTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}
