import React, { createContext, useEffect, useState } from "react";
import { getLocal, saveLocal } from "../storage/storage";

export const FontSize = createContext();
const FontSizeContext = ({ children }) => {
  const [fontSize, setFontSize] = useState("Medium");

  useEffect(() => {
    const loadFont = async () => {
      const getFont = await getLocal("fontsize");

      if (getFont !== null) {
        setFontSize(getFont);
      }
    };

    loadFont();
  }, []);
  const changeFontSize = async (size) => {
    const newFont = size;

    setFontSize(newFont);
    await saveLocal("fontsize", newFont);


  };

  return (
    <FontSize.Provider value={{ fontSize, changeFontSize }}>
      {children}
    </FontSize.Provider>
  );
};

export default FontSizeContext;
