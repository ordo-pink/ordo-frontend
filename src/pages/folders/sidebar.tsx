import { useTranslation } from "react-i18next";

export const FoldersSidebar = () => {
  const { t } = useTranslation();

  return <div>{t("activities.activity.folders.name")}</div>;
};
