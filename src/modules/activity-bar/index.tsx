import type { TActivity } from "@modules/activity-bar/types";

import { useCallback, useState } from "react";

import { Activity } from "@modules/activity-bar/components/activity";
import { useActivityBarWorker } from "@workers/activity-bar-worker";

import "@modules/activity-bar/index.css";

export const ActivityBar = () => {
  const [activities, setActivities] = useState<TActivity[]>([]);

  const onGotActivities = useCallback((e: MessageEvent<TActivity[]>) => {
    setActivities(e.data);
  }, []);

  useActivityBarWorker(onGotActivities);

  return (
    <div className="activity-bar">
      <div className="activity-bar__section">
        {activities.map((activity) => (
          <Activity key={activity.name} {...activity} />
        ))}
      </div>
      <div className="activity-bar__section">
        <Activity
          path="/account"
          icon="HiOutlineUserCircle"
          name="activities.activity.account.name"
          description="activities.activity.account.description"
        />
        <Activity
          path="/achievements"
          icon="HiOutlineSparkles"
          name="activities.activity.achievements.name"
          description="activities.activity.achievements.description"
        />
        <Activity
          path="/settings"
          icon="HiOutlineCog"
          name="activities.activity.settings.name"
          description="activities.activity.settings.description"
        />
      </div>
    </div>
  );
};
