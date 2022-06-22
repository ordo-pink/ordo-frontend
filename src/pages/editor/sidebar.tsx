import { useTranslation } from "react-i18next";

export const EditorSidebar = () => {
  const { t } = useTranslation();

  return <div>{t("activities.activity.editor.name")}</div>;
};
