import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css"; 

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en_locale from './locales/en/translation.json';
import es_locale from './locales/es/translation.json';


i18next.use(LanguageDetector).init({
    interpolation: { escapeValue: false },
    lng: 'es',
    debug: 'true',
    defaultNS: 'common',
    resources: {
        en: {
            common: en_locale
        },
        es: {
            common: es_locale
        }
    }
});


ReactDOM.render(
  <I18nextProvider i18n={i18next}>
        <Main/>
  </I18nextProvider>,

  document.getElementById("root")
);
