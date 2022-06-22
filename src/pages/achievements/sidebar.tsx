import { useTranslation } from "react-i18next";

export const AchievementsSidebar = () => {
  const { t } = useTranslation();

  return <div>{t("activities.activity.achievements.name")}</div>;
};
