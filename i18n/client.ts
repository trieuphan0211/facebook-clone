"use client";

import { useEffect, useState } from "react";
import i18next, { i18n } from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationResponse,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

// Initialize i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // Let the language be detected on the client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

// Custom hook to use translation
export function useTranslation(
  language: string,
  namespace: string,
  options: any = {}
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const { t, i18n } = useTranslationOrg(namespace, options);

  useEffect(() => {
    if (runsOnServerSide && language && i18n.language !== language) {
      console.log(
        "Changing language on the server side",
        language,
        i18n.language
      );
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  useEffect(() => {
    if (!runsOnServerSide) {
      if (i18n.language !== language) {
        i18n.changeLanguage(language);
      }
      if (cookies["accept-language"] !== language) {
        setCookie(cookieName, language, { path: "/" });
      }
    }
  }, [language, i18n, cookies, setCookie]);

  return { t, i18n };
}
