import { FC } from "react";

import { Route } from "@utils/router/route";
import { SettingsPage } from "@pages/settings";
import { AccountPage } from "@pages/account";
import { AchievementsPage } from "@pages/achievements";
import { EditorPage } from "@pages/editor";
import { GraphPage } from "@pages/graph";
import { CheckboxesPage } from "@pages/checkboxes";
import { FinderPage } from "@pages/finder";
import { FoldersPage } from "@pages/folders";

import "@containers/workspace/index.css";

export const Workspace: FC = () => (
  <div className="workspace">
    <Route path="/">
      <EditorPage />
    </Route>
    <Route path="/graph">
      <GraphPage />
    </Route>
    <Route path="/checkboxes">
      <CheckboxesPage />
    </Route>
    <Route path="/finder">
      <FinderPage />
    </Route>
    <Route path="/folders">
      <FoldersPage />
    </Route>
    <Route path="/account">
      <AccountPage />
    </Route>
    <Route path="/achievements">
      <AchievementsPage />
    </Route>
    <Route path="/settings">
      <SettingsPage />
    </Route>
  </div>
);
