import { useTranslation } from "react-i18next";

export const GraphSidebar = () => {
  const { t } = useTranslation();

  return <div>{t("activities.activity.graph.name")}</div>;
};
