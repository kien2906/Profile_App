import React, { createContext, useEffect, useState } from "react";
import { getLocal, saveLocal } from "../storage/storage";
export const Theme = createContext();
const ThemeContext = ({ children }) => {
  useEffect(() => {
    const loadTheme = async () => {
      const saveTheme = await getLocal("theme");

      if (saveTheme !== null) {
        setTheme(saveTheme);
      }
    };

    loadTheme();
  }, []);
  const [theme, setTheme] = useState(false);

  const handleTheme = async () => {
    const newTheme = !theme;

    setTheme(newTheme);
    await saveLocal("theme", newTheme);
  };

  return (
    <Theme.Provider value={{ theme, handleTheme }}>{children}</Theme.Provider>
  );
};

export default ThemeContext;
