import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importa tus archivos de recursos de traducción
import translationEN from './language/en/translation.json'
import translationES from './language/es/translation.json'

// Los recursos de traducción.
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
}

i18n
  .use(initReactI18next) // pasa i18n a react-i18next
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'en', // usa inglés si no se encuentra el idioma

    interpolation: {
      escapeValue: false // no necesita escapar de xss
    }
  })

export default i18n
