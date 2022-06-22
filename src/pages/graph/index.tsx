import { useTranslation } from "react-i18next";

import "@pages/graph/index.css";

export const GraphPage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col self-center w-full md:w-10/12 max-w-5xl">
      <h1 className="z-10 text-3xl my-5 uppercase font-black break-all">
        {t("activities.activity.graph.name")}
      </h1>

      <div className=" z-10 flex flex-col space-y-2 md:flex-row md:justify-between"></div>
    </div>
  );
};
