import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Establece el idioma predeterminado como español

  const toggleLanguageToEs = () => {
    setLanguage('es');
  };

  const toggleLanguageToEn = () => {
    setLanguage('en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguageToEs, toggleLanguageToEn }}>
      {children}
    </LanguageContext.Provider>
  );
};