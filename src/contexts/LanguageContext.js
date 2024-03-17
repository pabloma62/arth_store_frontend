// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState } from 'react'
import i18n from 'i18next'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language)

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
