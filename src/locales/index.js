import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./en.json";
import ruLang from "./ru.json";
import Language from "../helpers/language.js";

const resources = {
  en: {
    translation: enLang
  },
  ru: {
    translation: ruLang
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Language(),
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;