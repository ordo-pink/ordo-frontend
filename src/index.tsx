import React from "react";
import i18next from "i18next";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { App } from "@containers/app";
import { Either } from "@utils/either";
// import reportWebVitals from "@utils/performance/report-web-vitals";

import "./index.css";

import ru from "@i18n/ru.json";
import en from "@i18n/en.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

Either.fromNullable(document.getElementById("root"))
  .map(ReactDOM.createRoot)
  .fold(
    () => console.error("Root element not found"),
    (root) =>
      root.render(
        <React.StrictMode>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </React.StrictMode>
      )
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
