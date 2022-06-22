import { useTranslation } from "react-i18next";

import { useBlob } from "@hooks/use-blob";

import "@pages/achievements/index.css";

export const AchievementsPage = () => {
  const { t } = useTranslation();

  const Blob = useBlob("hexagons");

  return (
    <div className="relative flex flex-col self-center w-full md:w-10/12 max-w-5xl">
      <Blob />

      <h1 className="z-10 text-3xl my-5 uppercase font-black break-all">
        {t("activities.activity.achievements.name")}
      </h1>
      <div className="z-10 flex flex-col space-y-2 md:flex-row md:justify-between"></div>
    </div>
  );
};
