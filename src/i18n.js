import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locales/en/lang.json';
import translationRu from './locales/ru/lang.json';

const resources = {
  en: {
    translation: translationEn
  },
  ru: {
    translation: translationRu
  }
};

const lang = ['en','ru']

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    whitelist: lang,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;