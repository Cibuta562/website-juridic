// LanguageContext.js
import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ro");

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    console.log("Limba schimbata in " + lang);
  };

  const getText = (translations, key) => {
    if (language === "ro") {
      return translations[key] || "";
    } else if (language === "de") {
      return translations[key] || "";
    } else {
      console.log("Limba nerecunoscuta sau neselectata");
      return "";
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};
