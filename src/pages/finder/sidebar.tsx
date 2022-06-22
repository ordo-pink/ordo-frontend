import { useTranslation } from "react-i18next";

export const FinderSidebar = () => {
  const { t } = useTranslation();

  return <div>{t("activities.activity.finder.name")}</div>;
};
