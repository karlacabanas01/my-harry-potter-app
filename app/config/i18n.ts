import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones en inglés y español
const resources = {
  en: {
    translation: {
      "Harry Potter Books": "Harry Potter Books",
      Author: "Author",
      Pages: "Pages",
      "Release Date": "Release Date",
      "More info": "More info",
      "Switch to Spanish": "Switch to Spanish",
    },
  },
  es: {
    translation: {
      "Harry Potter Books": "Libros de Harry Potter",
      Author: "Autor",
      Pages: "Páginas",
      "Release Date": "Fecha de lanzamiento",
      "More info": "Más información",
      "Switch to Spanish": "Cambiar a Español",
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta el idioma automáticamente
  .use(initReactI18next) // Pasa el i18n al contexto de React
  .init({
    resources,
    fallbackLng: "en", // Idioma predeterminado
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;
