import type { TActivity } from "@modules/activity-bar/types";

import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useIcon } from "@hooks/use-icon";
import { Link, useRouter } from "@utils/router";
import { Either } from "@utils/either";

import "@modules/activity-bar/components/activity/index.css";

export const Activity: FC<TActivity> = ({ path, icon, name, description }) => {
  const Icon = useIcon(icon);
  const { route } = useRouter();
  const [isCurrentActivity, setIsCurrentActivity] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    Either.fromBoolean(() => route.path === path, true, false).fold(
      setIsCurrentActivity,
      setIsCurrentActivity
    );
  }, [route.path, path]);

  return (
    <Link to={path}>
      <Icon
        aria-label={t(name)}
        title={`${t(name)}. ${t(description)}`}
        className={`activity ${isCurrentActivity ? "activity-current" : ""}`}
      />
    </Link>
  );
};
