import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

import { useBlob } from "@hooks/use-blob";

import "@pages/settings/index.css";

export const SettingsPage = () => {
  const { t, i18n } = useTranslation();

  const Blob = useBlob("cogs");

  const onLanguageChange = (e: ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value);

  return (
    <div className="relative flex flex-col self-center w-full md:w-10/12 max-w-5xl">
      <Blob />

      <h1 className="z-10 text-3xl my-5 uppercase font-black break-all">
        {t("activities.activity.settings.name")}
      </h1>
      <div className=" z-10 flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
        <label htmlFor="language">
          <strong>{t("settings.language.title")}</strong>
          <p className="text-sm text-neutral-700">
            {t("settings.language.description")}
          </p>
        </label>

        <select
          id="language"
          className="form-select px-3 py-2 md:w-64"
          value={i18n.language}
          onChange={onLanguageChange}
        >
          <option value="ru">🇷🇺 Русский</option>
          <option value="en">🇳🇿 English</option>
        </select>
      </div>
    </div>
  );
};
