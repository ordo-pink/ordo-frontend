import { useTranslation } from "react-i18next";

export const CheckboxesSidebar = () => {
  const { t } = useTranslation();

  return <div>{t("activities.activity.checkboxes.name")}</div>;
};
